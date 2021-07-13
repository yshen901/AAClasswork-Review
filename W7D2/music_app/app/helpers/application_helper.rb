module ApplicationHelper
  def authenticity_form
    "<input type=\"hidden\" name=\"authenticity_token\" value=#{ form_authenticity_token } >".html_safe
  end

  def delete_form
    "<input type=\"hidden\" name=\"_method\" value=\"delete\">".html_safe
  end

  def patch_form
    "<input type=\"hidden\" name=\"_method\" value=\"patch\">".html_safe
  end
end
