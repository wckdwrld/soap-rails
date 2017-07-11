class PodcastController < ApplicationController
  def index
    @content_block_props = { 
	    name: "Stranger",
	   title: "Test Title",
	   ep_number: 0,
	  text: "Test text to see if a longer string works just fine here, who really knows, not sure how i'm going to be grabbing this garbage from a database though, beats me!" 
    }
  end
end
