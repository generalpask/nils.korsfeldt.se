require "sinatra"

get "/" do
    redirect "/index"
end

get "/index" do
    send_file "./views/index.html"
end

get "/index/photography" do
    send_file "photography.html"
end