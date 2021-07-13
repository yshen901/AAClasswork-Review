module ApplicationHelper
  def authenticity_form
    "<input type=\"hidden\" name=\"authenticity_token\" value=#{ form_authenticity_token } >".html_safe
  end

  def patch_form
    "<input type=\"hidden\" name=\"_method\" value=\"patch\">".html_safe
  end

  def delete_form(action_url, submit_button)
    "<form action=#{ action_url } method=\"post\">
      #{ authenticity_form }
      <input type=\"hidden\" name=\"_method\" value=\"delete\">
      <input type=\"submit\" value=#{ submit_button }>
    </form>".html_safe
  end
end
