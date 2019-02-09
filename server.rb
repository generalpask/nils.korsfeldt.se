require "sinatra"

get "/" do
    redirect "/index"
    
end

get "/index" do
    send_file "./views/index.html"
    t = %w[text/css]
    request.accept              # ['text/html', '*/*']
    request.accept? 'text/css'  # true
    request.preferred_type(t)   # 'text/html'
end
