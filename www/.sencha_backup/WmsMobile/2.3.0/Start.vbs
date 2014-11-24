
Dim url, startCmd, startapi

url = "http://localhost:1841/devices"
startCmd = "sencha web start"
startapi = "D:\Versionador\tfs\Projetos\Produtos\Wms\1-Dev\1-Dev\Mobile.Web.Api.Hosted\bin\Debug\Vvs.Wms.Mobile.Web.Api.Hosted.exe"

Set oShell = WScript.CreateObject("WSCript.shell")

oShell.run startapi

oShell.run startCmd

oShell.run url


