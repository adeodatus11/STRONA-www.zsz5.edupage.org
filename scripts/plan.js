var imgPlus,imgMinus
var imgLoaded=false

function loadImg(){
	if(document.images){
		imgPlus=new Image()
		imgPlus.src='images/plus.gif'
		imgMinus=new Image()
		imgMinus.src='images/minus.gif'
		imgLoaded=true
	}
}

loadImg()

function spis(n){
	var e=(document.getElementById)?document.getElementById(n):(document.all)?document.all[n]:null
	if(e!=null){
		if(e.className=='nblk'){
			e.className='blk'
			document.images['i'+n.charAt(0)].src=imgMinus.src
		}
		else{
			e.className='nblk'
			document.images['i'+n.charAt(0)].src=imgPlus.src
		}
	}
}

function drukuj(){
	if(self.parent.frames.length<2)
		alert('Polecenie niedostepne')
	else{
		self.parent.plan.focus()
		window.print()
	}
}

function isPlanView(){
	if(!location || !location.pathname)
		return false
	return location.pathname.indexOf('/plany/')!=-1 || location.pathname.indexOf('\\plany\\')!=-1
}

function addOpenDayBanner(){
	if(!document.body || !isPlanView())
		return
	if(document.getElementById('open-day-banner'))
		return

	var header=document.getElementsByClassName?document.getElementsByClassName('tabtytul')[0]:null
	var banner=document.createElement('div')
	banner.id='open-day-banner'
	banner.className='open-day-banner'
	banner.innerHTML='<strong>Dzień Otwarty ZSZ nr 5</strong> - zapraszamy kandydatów i rodziców. Szczegóły w aktualnościach szkoły.'
	if(header && header.nextSibling)
		header.parentNode.insertBefore(banner,header.nextSibling)
	else if(header)
		header.parentNode.appendChild(banner)
	else
		document.body.insertBefore(banner,document.body.firstChild)
}

if(document.addEventListener)
	document.addEventListener('DOMContentLoaded',addOpenDayBanner,false)
else if(window.attachEvent)
	window.attachEvent('onload',addOpenDayBanner)
else
	window.onload=addOpenDayBanner
