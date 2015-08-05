require 'rails_helper'

describe "As a user I can", :js=> true  do

  it 'visits the homepage and finds text' do
    visit '/'
    expect(page).to have_text 'q'
  end

  it 'visits the homepage and finds container class' do
    visit '/'
    expect(page).to have_selector 'div.container'
  end

  it 'visits the homepage and counts the number of tiles' do
    visit '/'
    page.should have_css('.color_me', :count=>25)
  end

end

