// The file was created by Anna Sorokina on 19.08.2019
// It is based on a similar convertion map-file by George Moroz (created 11.06.2013).
function result() {
	var result_field = ady_bzhe2field(input_text);    
	document.getElementById("output").style.display = "block";
	document.getElementById("tip").innerHTML = result_field;
}

function transliterate() {
  var input_text = document.getElementById("inp_text").value;  
  // var trans_sys = document.getElementById("trans_sys").value;  
  // var stress = document.getElementById("stress").checked;
  var punct = document.getElementById("punct").checked;
  var tab = document.getElementById("tab").checked;
  
  // if (stress == true) {input_text = input_text.toLowerCase()}
  if (tab == true) {input_text = tabulate(input_text)}
  if (punct == true) {input_text = rm_punct(input_text)}; 

  var result_field = ady_bzhe2field(input_text);    
  document.getElementById("output").style.display = "block";
  document.getElementById("tip").innerHTML = result_field;
  
}


document.getElementById("transliterate").onclick = function() {
  transliterate();
};

// from bzhedug adyghe cyrillic script to fieldwork notation
function ady_bzhe2field(value) {

	value = value.toLowerCase()

	// convert combinations of five letters
	value = value.replace(/къhуа/g,'qʰa')
	value = value.replace(/сшъуа/g,'cʷa')

	value = value.replace(/сшӏуа/g,'t͡ṣ̂ʷa')
	value = value.replace(/сш1уа/g,'t͡ṣ̂ʷa')
	value = value.replace(/сшIуа/g,'t͡ṣ̂ʷa')
	value = value.replace(/сшӀуа/g,'t͡ṣ̂ʷa')
	value = value.replace(/сшiуа/g,'t͡ṣ̂ʷa')

	// convert combinations of four letters
	value = value.replace(/пӏуа/g,'ṗʷa')
	value = value.replace(/п1уа/g,'ṗʷa')
	value = value.replace(/пiуа/g,'ṗʷa')
	value = value.replace(/пӀуа/g,'ṗʷa')
	value = value.replace(/пIуа/g,'ṗʷa')
	value = value.replace(/т1уа/g,'ṭʷa')
	value = value.replace(/тIуа/g,'ṭʷa')
	value = value.replace(/тӏуа/g,'ṭʷa')
	value = value.replace(/тӀуа/g,'ṭʷa')
	value = value.replace(/тiуа/g,'ṭʷa')
	value = value.replace(/с1уа/g,'c̣ʷa')
	value = value.replace(/сIуа/g,'c̣ʷa')
	value = value.replace(/сiуа/g,'c̣ʷa')
	value = value.replace(/сӏуа/g,'c̣ʷa')
	value = value.replace(/сӀуа/g,'c̣ʷa')
	value = value.replace(/дзуа/g,'ʒʷa')
	value = value.replace(/шъуа/g,'ŝʷa')
	value = value.replace(/ш1уа/g,'ṣ̂ʷa')
	value = value.replace(/шIуа/g,'ṣ̂ʷa')
	value = value.replace(/шӏуа/g,'ṣ̂ʷa')
	value = value.replace(/шӀуа/g,'ṣ̂ʷa')
	value = value.replace(/шiуа/g,'ṣ̂ʷa')
	value = value.replace(/жъуа/g,'ẑʷa')
	value = value.replace(/кiуа/g,'ḳʷa')
	value = value.replace(/к1уа/g,'ḳʷa')
	value = value.replace(/кIуа/g,'ḳʷa')
	value = value.replace(/кӏуа/g,'ḳʷa')
	value = value.replace(/кӀуа/g,'ḳʷa')
	value = value.replace(/кhуа/g,'kʰʷa')
	value = value.replace(/къуа/g,'qʷa')
	value = value.replace(/къhо/g,'qʰʷe')
	value = value.replace(/къhу/g,'qʰʷə')
	value = value.replace(/хъуа/g,'χʷa')
	value = value.replace(/гъуа/g,'ᴙʷa')
	value = value.replace(/сшъу/g,'cʷə')
	value = value.replace(/сшъо/g,'cʷe')
	value = value.replace(/сш1у/g,'t͡ṣ̂ʷə')
	value = value.replace(/сшIу/g,'t͡ṣ̂ʷə')
	value = value.replace(/сшӏу/g,'t͡ṣ̂ʷə')
	value = value.replace(/сшӀу/g,'t͡ṣ̂ʷə')
	value = value.replace(/сшiу/g,'t͡ṣ̂ʷə')
	value = value.replace(/сшIо/g,'t͡ṣ̂ʷe')
	value = value.replace(/сшiо/g,'t͡ṣ̂ʷe')
	value = value.replace(/сш1о/g,'t͡ṣ̂ʷe')
	value = value.replace(/сшӏо/g,'t͡ṣ̂ʷe')
	value = value.replace(/сшӀо/g,'t͡ṣ̂ʷe')
	value = value.replace(/сштh/g,'čʰ')

	// convert trigraphic consonants
	value = value.replace(/п1о/g,'ṗʷe')
	value = value.replace(/п1у/g,'ṗʷə')
	value = value.replace(/пIо/g,'ṗʷe')
	value = value.replace(/пIу/g,'ṗʷə')
	value = value.replace(/пӏо/g,'ṗʷe')
	value = value.replace(/пӏу/g,'ṗʷə')
	value = value.replace(/пӀо/g,'ṗʷe')
	value = value.replace(/пӀу/g,'ṗʷə')
	value = value.replace(/пiо/g,'ṗʷe')
	value = value.replace(/пiу/g,'ṗʷə')	

	value = value.replace(/ц1о/g,'c̣ʷe')
	value = value.replace(/ц1у/g,'c̣ʷə')
	value = value.replace(/цIо/g,'c̣ʷe')
	value = value.replace(/цIу/g,'c̣ʷə')
	value = value.replace(/цӏо/g,'c̣ʷe')
	value = value.replace(/цӏу/g,'c̣ʷə')
	value = value.replace(/цӀо/g,'c̣ʷe')
	value = value.replace(/цӀу/g,'c̣ʷə')
	value = value.replace(/цiо/g,'c̣ʷe')
	value = value.replace(/цiу/g,'c̣ʷə')

	value = value.replace(/т1о/g,'ṭʷe')
	value = value.replace(/т1у/g,'ṭʷə')
	value = value.replace(/тIо/g,'ṭʷe')
	value = value.replace(/тIу/g,'ṭʷə')
	value = value.replace(/тӏо/g,'ṭʷe')
	value = value.replace(/тӏу/g,'ṭʷə')
	value = value.replace(/тӀо/g,'ṭʷe')
	value = value.replace(/тӀу/g,'ṭʷə')
	value = value.replace(/тiо/g,'ṭʷe')
	value = value.replace(/тiу/g,'ṭʷə')

	value = value.replace(/дзо/g,'ʒʷe')
	value = value.replace(/дзу/g,'ʒʷə')
	value = value.replace(/чъh/g,'čʰ')
	value = value.replace(/шъо/g,'ŝʷe')
	value = value.replace(/шъу/g,'ŝʷə')

	value = value.replace(/ш1у/g,'ṣ̂ʷə')
	value = value.replace(/шIу/g,'ṣ̂ʷə')
	value = value.replace(/шӏу/g,'ṣ̂ʷə')
	value = value.replace(/шӀу/g,'ṣ̂ʷə')
	value = value.replace(/шiу/g,'ṣ̂ʷə')

	value = value.replace(/ш1о/g,'ṣ̂ʷe')
	value = value.replace(/шIо/g,'ṣ̂ʷe')
	value = value.replace(/шӏо/g,'ṣ̂ʷe')
	value = value.replace(/шӀо/g,'ṣ̂ʷe')
	value = value.replace(/шiо/g,'ṣ̂ʷe')

	value = value.replace(/жъо/g,'ẑʷe')
	value = value.replace(/жъу/g,'ẑʷə')
	value = value.replace(/куа/g,'kʷa')

	value = value.replace(/к1о/g,'ḳʷe')
	value = value.replace(/кiо/g,'ḳʷe')
	value = value.replace(/кIо/g,'ḳʷe')
	value = value.replace(/кӏо/g,'ḳʷe')
	value = value.replace(/кӀо/g,'ḳʷe')

	value = value.replace(/кiу/g,'ḳʷə')
	value = value.replace(/к1у/g,'ḳʷə')
	value = value.replace(/кIу/g,'ḳʷə')
	value = value.replace(/кӏу/g,'ḳʷə')
	value = value.replace(/кӀу/g,'ḳʷə')

	value = value.replace(/к1ь/g,'ḳʼ')
	value = value.replace(/кIь/g,'ḳʼ')
	value = value.replace(/кӏь/g,'ḳʼ')
	value = value.replace(/кӀь/g,'ḳʼ')
	value = value.replace(/кiь/g,'ḳʼ')

	value = value.replace(/кhо/g,'kʰʷe')
	value = value.replace(/кhу/g,'kʰʷə')
	value = value.replace(/гуа/g,'gʷa')
	value = value.replace(/къо/g,'qʷe')
	value = value.replace(/къу/g,'qʷə')
	value = value.replace(/къh/g,'qʰ')
	value = value.replace(/хъо/g,'χʷe')
	value = value.replace(/хъу/g,'χʷə')
	value = value.replace(/гъо/g,'ʁʷe')
	value = value.replace(/гъу/g,'ʁʷə')
	value = value.replace(/1уа/g,'ʔʷa')
	value = value.replace(/Iуа/g,'ʔʷa')
	value = value.replace(/ӏуа/g,'ʔʷa')
	value = value.replace(/Ӏуа/g,'ʔʷa')
	value = value.replace(/iуа/g,'ʔʷa')
	value = value.replace(/сшт/g,'č')
	value = value.replace(/сщh/g,'čʼʰ')
	value = value.replace(/сшh/g,'čʰ')
	value = value.replace(/сш1/g,'t͡ṣ̂')
	value = value.replace(/сшI/g,'t͡ṣ̂')
	value = value.replace(/сшӏ/g,'t͡ṣ̂')
	value = value.replace(/сшӀ/g,'t͡ṣ̂')
	value = value.replace(/сшi/g,'t͡ṣ̂')
	value = value.replace(/сшъ/g,'t͡ŝ')

	// convert digraphic consonants
	value = value.replace(/п1/g,'ṗ')
	value = value.replace(/пI/g,'ṗ')
	value = value.replace(/пӏ/g,'ṗ')
	value = value.replace(/пӀ/g,'ṗ')
	value = value.replace(/пi/g,'ṗ')
	value = value.replace(/пh/g,'pʰ')
	value = value.replace(/т1/g,'ṭ')
	value = value.replace(/тI/g,'ṭ')
	value = value.replace(/тӏ/g,'ṭ')
	value = value.replace(/тӀ/g,'ṭ')
	value = value.replace(/тi/g,'ṭ')
	value = value.replace(/тh/g,'tʰ')
	value = value.replace(/ц1/g,'c̣')
	value = value.replace(/цI/g,'c̣')
	value = value.replace(/цӏ/g,'c̣')
	value = value.replace(/цӀ/g,'c̣')
	value = value.replace(/цi/g,'c̣')
	value = value.replace(/цh/g,'cʰ')
	value = value.replace(/цо/g,'cʷe')
	value = value.replace(/цу/g,'cʷə')
	value = value.replace(/дз/g,'ʒ')
	value = value.replace(/чъ/g,'č')
	value = value.replace(/ч1/g,'č̣')
	value = value.replace(/чI/g,'č̣')
	value = value.replace(/чӏ/g,'č̣')
	value = value.replace(/чӀ/g,'č̣')
	value = value.replace(/чi/g,'č̣')
	value = value.replace(/лъ/g,'λ')
	value = value.replace(/л1/g,'λ̣')
	value = value.replace(/лI/g,'λ̣')
	value = value.replace(/лӏ/g,'λ̣')
	value = value.replace(/лӀ/g,'λ̣')
	value = value.replace(/лi/g,'λ̣')
	value = value.replace(/шъ/g,'ŝ')
	value = value.replace(/ш1/g,'ṣ̂')
	value = value.replace(/шI/g,'ṣ̂')
	value = value.replace(/шӏ/g,'ṣ̂')
	value = value.replace(/шӀ/g,'ṣ̂')
	value = value.replace(/шi/g,'ṣ̂')
	value = value.replace(/жъ/g,'ẑ')
	value = value.replace(/щh/g,'šʼʰ')
	value = value.replace(/жь/g,'žʼ')
	value = value.replace(/чh/g,'čʼʰ')
	value = value.replace(/дж/g,'ǯʼ')
	value = value.replace(/к1/g,'č̣ʼ')
	value = value.replace(/кI/g,'č̣ʼ')
	value = value.replace(/кӏ/g,'č̣ʼ')
	value = value.replace(/кӀ/g,'č̣ʼ')
	value = value.replace(/кi/g,'č̣ʼ')
	value = value.replace(/ко/g,'kʷe')
	value = value.replace(/ку/g,'kʷə')
	value = value.replace(/кh/g,'kʰ')
	value = value.replace(/го/g,'gʷe')
	value = value.replace(/гу/g,'gʷə')
	value = value.replace(/къ/g,'q')
	value = value.replace(/хъ/g,'χ')
	value = value.replace(/гъ/g,'ʁ')
	value = value.replace(/хь/g,'h')
	value = value.replace(/1о/g,'ʔʷe')
	value = value.replace(/1у/g,'ʔʷə')
	value = value.replace(/iо/g,'ʔʷe')
	value = value.replace(/iу/g,'ʔʷə')
	value = value.replace(/Iо/g,'ʔʷe')
	value = value.replace(/Iу/g,'ʔʷə')
	value = value.replace(/ӏо/g,'ʔʷe')
	value = value.replace(/ӏу/g,'ʔʷə')
	value = value.replace(/Ӏо/g,'ʔʷe')
	value = value.replace(/Ӏу/g,'ʔʷə')
	value = value.replace(/сщ/g,'čʼ')
	value = value.replace(/сш/g,'č')

	// convert unigraphic consonants
	value = value.replace(/п/g,'p')
	value = value.replace(/б/g,'b')
	value = value.replace(/ф/g,'f')
	value = value.replace(/м/g,'m')
	value = value.replace(/т/g,'t')
	value = value.replace(/д/g,'d')
	value = value.replace(/с/g,'s')
	value = value.replace(/з/g,'z')
	value = value.replace(/ц/g,'c')
	value = value.replace(/р/g,'r')
	value = value.replace(/н/g,'n')
	value = value.replace(/ш/g,'š')
	value = value.replace(/ш/g,'šʰ')
	value = value.replace(/ж/g,'ž')
	value = value.replace(/л/g,'l')
	value = value.replace(/щ/g,'šʼ')
	value = value.replace(/ч/g,'čʼ')
	value = value.replace(/к/g,'k')
	value = value.replace(/г/g,'g')
	value = value.replace(/х/g,'x')
	value = value.replace(/1/g,'ʔ')
	value = value.replace(/I/g,'ʔ')
	value = value.replace(/ӏ/g,'ʔ')
	value = value.replace(/Ӏ/g,'ʔ')
	value = value.replace(/i/g,'ʔ')
	value = value.replace(/й/g,'j')


	// convert digraphic vowels
	value = value.replace(/уа/g,'wa')
	value = value.replace(/эу([\s\t\r\n])+/g,'ew$1')
	value = value.replace(/эу([!")(@#$\[\]%^/\&_=—'*+,.:;<>»«?\\{}|~—])+/g,'ew$1')

	
	// convert unigraphic vowels
	value = value.replace(/э/g,'e')
	value = value.replace(/а/g,'a')
	value = value.replace(/ы/g,'ə')
	value = value.replace(/о/g,'we')
	value = value.replace(/у/g,'wə')
	value = value.replace(/я/g,'ja')
	value = value.replace(/е/g,'je')
	value = value.replace(/и/g,'jə')


	return value
}


// punctuation
function rm_punct(value) {
	value = value.replace(/[!")(@#$\[\]%^/\&_=—'*+,.:;<>»«?\\{}|~—]/g,"")
  return value
}

// tabs
function tabulate(value) {
	value = value.replace(/ /g,"	")
  return value
}


