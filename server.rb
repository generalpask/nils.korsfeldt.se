require "sinatra"

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


get "/0300h" do
    send_file "./public/galleries/0300h.html"
end

get "/samplegallery" do
    send_file "./public/galleries/samplegallery.html"
end

get "/skelly" do
    send_file "./public/galleries/skelly.html"
end