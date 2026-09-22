require 'webrick'

server = WEBrick::HTTPServer.new(Port: 8088)

server.mount_proc '/' do |req, res|
  path = req.path == '/' ? '/index.html' : req.path
  local_path = File.join(__dir__, path)
  if File.file?(local_path)
    res.status = 200
    if path.end_with?('.html')
      res.content_type = 'text/html; charset=utf-8'
    elsif path.end_with?('.css')
      res.content_type = 'text/css; charset=utf-8'
    elsif path.end_with?('.js')
      res.content_type = 'application/javascript; charset=utf-8'
    elsif path.end_with?('.json')
      res.content_type = 'application/json'
    elsif path.end_with?('.png')
      res.content_type = 'image/png'
    elsif path.end_with?('.jpg') || path.end_with?('.jpeg')
      res.content_type = 'image/jpeg'
    elsif path.end_with?('.svg')
      res.content_type = 'image/svg+xml'
    else
      res.content_type = 'application/octet-stream'
    end
    res.body = File.binread(local_path)
  else
    res.status = 404
    res.body = "File not found: #{path}"
  end
end

trap('INT') { server.shutdown }
server.start
