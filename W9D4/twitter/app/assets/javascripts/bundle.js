/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APIUtil": () => (/* binding */ APIUtil)
/* harmony export */ });
const APIUtil = {
  followUser: (id) => {
    return $.ajax({
      type: 'POST',
      url: `${id}/follow`,
      dataType: 'json'
    });
  },

  unfollowUser: (id) => {
    return $.ajax({
      type: 'DELETE',
      url:`${id}/follow`,
      dataType:'json'
    });
  },

  searchUsers: (name) => {
    return $.ajax({
      type: 'GET',
      url: 'search',
      dataType: "json",
      data: { query: name }
    });
  },

  makeTweet: (data) => {
    return $.ajax({
      type: "POST",
      url: '/tweets',
      dataType: 'json',
      data: data
    })
  }
}

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FollowToggle)
/* harmony export */ });
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");


class FollowToggle {
  constructor($el, options) {
    this.$el = $el;

    this.userId = this.$el.data("user-id") || options.userId;
    this.followed = this.$el.data("initial-follow-state") || options.followed;

    this.render();
    this.addClickHandler();
  }

  render() {
    if (this.followed) 
      this.$el.text("Unfollow");
    else
      this.$el.text("Follow");
  }

  disableButton() {
    this.$el.prop("disabled", true);
    setTimeout(() => {
      this.$el.prop("disabled", false);
    }, 1000);
  }

  addClickHandler() {
    this.$el.on("click", event => {
      event.preventDefault();

      this.disableButton(); // disable the button temporarily so we only click once
      if (this.followed)
        _api_util__WEBPACK_IMPORTED_MODULE_0__.APIUtil.unfollowUser(this.userId).then(() => {
          this.followed = false;
          this.render();
        });
      else
        _api_util__WEBPACK_IMPORTED_MODULE_0__.APIUtil.followUser(this.userId).then(() => {
          this.followed = true;
          this.render();
        });
    });
  }
}

/***/ }),

/***/ "./frontend/tweet_compose.js":
/*!***********************************!*\
  !*** ./frontend/tweet_compose.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TweetCompose)
/* harmony export */ });
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
   

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$el.on("submit", (e) => {
      this.submit(e);
    });
    
    this.$charsLeft = this.$el.find(".chars-left");
    this.$textArea = this.$el.find("textarea");
    this.$textArea.on("input", (e) => {
      this.handleInput(e);
    });
    
    this.$tweetMentions = $("#tweet-mentions");
    this.$addMentions = $("#add-mentions-button");
    this.$addMentions.on("click", e => {
      this.addMention(e);
    });

    this.handleSuccess = this.handleSuccess.bind(this);
  }

  // Helper functions for submit and handleSuccess
  disable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", true));
  }

  enable() {
    $(":input").each((idx, ele) => $(ele).prop("disabled", false));
  }   

  clearValues() {
    $('textarea').val("");
  }

  // Success callback for the submit
  handleSuccess(response) {
    this.enable();
    this.clearValues();

    let $li = $("<li></li>");
    $li.text(JSON.stringify(response));
    $("#feed").append($li);
  }

  // Fires an AJAX call to make the tweet
  submit(e) {
    e.preventDefault();
    debugger;

    let formData = $(e.currentTarget).serializeJSON();
    this.disable();
    _api_util__WEBPACK_IMPORTED_MODULE_0__.APIUtil.makeTweet(formData)
      .then((response) => this.handleSuccess(response));
  }

  // Updates the chars left counter
  handleInput(e) {
    let charsLeft = 140 - this.$textArea.val().length;
    this.$charsLeft.text(`${charsLeft}/140`);
  }

  // Adds an add mention dropdown list
  addMention(e) {
    e.preventDefault();
    e.stopPropagation();

    let options = window.users.map((user) => 
      `<option value="${user.id}">${user.username}</option>`
    ).join("");

    debugger;

    let select = `
      <select name="tweet[mentioned_user_ids][]"> 
        ${options}
      </select>
    `
    this.$tweetMentions.append($(select));
  }
}

/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UsersSearch)
/* harmony export */ });
/* harmony import */ var _api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_util */ "./frontend/api_util.js");
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");



class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$searchBar = $el.children("input");
    this.$usersList = $el.children("ul");

    this.addSearchHandler();
  }

  addSearchHandler() {
    this.$el.on("input", "input", () => {
      _api_util__WEBPACK_IMPORTED_MODULE_0__.APIUtil.searchUsers(this.$searchBar.val())
      .then((output) => {
        debugger;
        this.$usersList.empty();

        let $li, $a, $button;
        for (let i = 0; i < output.length; i++) {
          $a = $("<a></a>");
          $a.attr("href", `/users/${output[i].id}`);
          $a.text(output[i].username);

          $button = $("<button></button>");
          $button.addClass("follow-toggle");
          new _follow_toggle__WEBPACK_IMPORTED_MODULE_1__["default"]($button, {
            userId: output[i].id,
            followed: output[i].followed
          });

          $li = $("<li></li>");
          $li.append($a);
          $li.append($button);
          this.$usersList.append($li);
        }
      });
    });
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _follow_toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");
/* harmony import */ var _users_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users_search */ "./frontend/users_search.js");
/* harmony import */ var _tweet_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tweet_compose */ "./frontend/tweet_compose.js");




$(() => {
  let followToggles = [];
  let $buttons = $(".follow-toggle");
  $buttons.each((idx, ele) => {
    followToggles.push(new _follow_toggle__WEBPACK_IMPORTED_MODULE_0__["default"]($(ele)));
  });

  let $usersSearch = $(".users-search");   // one way to initialize
  let usersSearch = new _users_search__WEBPACK_IMPORTED_MODULE_1__["default"]($usersSearch);

  $(".tweet-compose").each((i, tc) => new _tweet_compose__WEBPACK_IMPORTED_MODULE_2__["default"](tc)); // another more way to initialize (more DRY)
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map