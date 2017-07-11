class PortfolioController < ApplicationController
  layout 'application'
  def index

  	@content_block_props = { 
		name: "Stranger",
		title: "Test Prop",
		ep_number: 0,
		text: "Test text that is not going to be long enough but should do for the purpose of this test"
	}
  
  end
end
