require "sinatra"
set :port, 4567


get "/" do
    redirect "/index"
end

get "/index" do
    send_file "./views/index.html"
end

get "/home" do
    send_file "./views/home.html"
end

get "/projects" do
    send_file "./views/projects.html"
end

get "/gallery" do
    send_file "./views/gallery.html"
end


get "/three_am" do
    erb :three_am
end

get "/samplegallery" do
    send_file "./views/samplegallery.html"
end

get "/skelly" do
    send_file "./views/skelly.html"
end

not_found do
    status 404
    "you madafaka"
end