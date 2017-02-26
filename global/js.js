//variables
var questions = [
"What is 'Politics'",
"What is Power",
"What is Informal Power",
"What is Formal Power", 
"What is Force", 
"What is Coercion", 
"What is  Authrority", 
"What is Inducement", 
"What is Persuasion", 
"What is Manipulation",
"What is Political Power",
"What is Economic Power",
"What is Military Power",
"What is Cultural Power",
"What is Territorial Power",
"Psychological Power",
"What is a Political Party",
"What is Policy",
"What is Hard Power",
"What is Soft Power",
"What is Sovereignty",
"What is a State",
"What is a Nation",
"What is a Nation-State",
"What is Citizen Journalism",
"What is Fake News",
"What is a state(indepth)",
"Two partially recognised states in the UN",
"The difference between state, nation, Nation-State, example for each",
"Explain what was 'The Peace of Westphalia' when, and why was it significant",
"Describe the principles the Peace of Westphalia was based on",
"What is 'State Sovereignty'",
"What is the role of a state",
"What is natinal interest and how do states promote it",
"(Discuss) ways in which the sovereignty of states can be challenged by specific global non‐state actors, with reference to examples.",
"Describe some of the key functions of political parties within Australian parliamentary democracy.",
". Explain the difference between hard power and soft power in international relations.",
"In what ways can state power(economic, Military, political, population and territorial) be measured",
"Using an example, Describe a method of challenging power and evaluate on its effectiveness",
"Extended Response (Provide 3 points): The media has the power to influence the political landscape in many different ways, right"
];
var answers = [
{answer:"Politics is the study of how power is gained and excercised to ahieve goals. It focuses on how individuals, organisations and governments obtain power, how it used, for what purposes, and how it is challenged", keyword: "How Power is gained; excercised; how individuals, organisations, governments obtain[ed]; use[d]; what purpose; to challenge  "}, 
{answer:"Power is the ability to influence or control the actions of others", keyword: "Power; influence; control"}, 
{answer:"Informal Power The degree of influence and ability to persuade, based on relationships and levels of personal respect; power not bound to legal proceedings, not instituationalised", keyword: "Informal Power; ability to persuade; not instituationalised"}, 
{answer:"Formal Power is Power vested in formal structured institutions", keyword: "Power; instituationalised"}, 
{answer:"Force is the direct physical application of violence and contraint", keyword: "Force; Direct application"}, 
{answer:"Coercion is obtaining compliance through force; threats and other means", keyword: "Coercion; compliance"}, 
{answer:"Authrority is Formally, a person or organisation able to exercise political or administrative power and control through rights that are designated by the state or an institution. More generally, a person has authority when they are recognised by others as having the right to exercise their power. There is an implied consent to the exercise of that power. Authority is therefore the legitimate use of power.", keyword: "individual or group; formal or informal; right or ability to exercise power; legitimate use of power"}, 
{answer:"Encouraging someone to do something through the provision of an advantage or benefit.", keyword: "Inducement; Encouragment; w/ benefits"}, 
{answer:"Persuasion is Convincing someone to do or believe something by appealing to reason or understanding", keyword: "Persuasion; w/reason"}, 
{answer:"Manipulation is to cleverly or unscrupulously (shrewdly, deviously) influence behaviour or belief by exploiting a person’s emotions, feelings or vulnerabilities", keyword: "Manipulation; influence through Coercion"},
{answer:"Political power is The use of laws by governments to regulate society. It is upheld by authority, where a government is considered legitimate and by the coercive apparatus of the state (police, judicial system)", keyword: "Power; legitimate; coercive apparatus of states"},
{answer:"Economic power is Control through the use of money or financial inducements", keyword: "Financial; Control;"},
{answer:"Military power is Coercive capability based on armed forces and weaponry, generally used externally to a state's borders.", keyword: "Coercive; Military capability"},
{answer:"Cultural power is The impact of values, traditions and lifestyles that may influence attitudes and behaviours", keyword: "Cultural impact; influence of attitudes"},
{answer:"Territorial power is The possession of land and natural resources that provides economic and strategic advantages.", keyword: "Land possession; w/strategic advantages"},
{answer:"Psychological power is  The control of others through manipulation of fears, emotions and insecurities.", keyword: "influence; emotional appeal"},
{answer:"Political party is An organisation that seeks parliamentary representation in order to promote or represent a particular group of people or set of ideas", keyword: "organisation; parliamentary representation; promotion of group; ideas"},
{answer:"Policy is A specific plan or course of action that is determined by a government, political party or business, which is intended to achieve specific outcomes.", keyword: "plan/action; government; party; organisation; goals"},
{answer:"Hard power is The ability to compel others to comply through the threat or use of force, or payment.  It refers to coercive tactics – the threat or use of armed forces, economic pressure or sanctions, or other forms of intimidation.", keyword: "compel; direct coercive tactics"},
{answer:"Soft power is The ability to influence and promote shared goals through dialogue and exchange.  It is the ability to attract and co-opt rather than coerce.", keyword: "influence; cooperation"},
{answer:"Sovereignty is Legally recognised control over citizens within its territory by a state, alongside the authority to represent their territorial entity within the international community" , keyword: "legal control; citizens/territory; authority to represent"},
{answer:"State is The prime actor in international relations, a state possesses defined territorial borders, a permanent population, an effective government with functioning institutions and legally recognised control over its citizens (sovereignty)", keyword: "Global actor;Defined territory; population; government; sovereignty"},
{answer:"Nation is Groups of people who share cultural characteristics such as language, culture and historical identity.", keyword: "ethnic group"},
{answer:"Nation-state is A state in which citizens have common bonds based on culture, language and history ", keyword: "state; common ethnic group"},
{answer:"Citizen journalism is The recording, reporting and online distribution of news events by non-professional members of the public.", keyword: "reporting; non-professional members"},
{answer:"Fake news is Deliberately false misinformation, designed to resemble credible journalism and to attract maximum attention. Can be motivated by both political / ideological and financial goals.", keyword: "misinformation; attention; goals"},
{answer:"A state is defined as having the following four key characteristics: Defined territorial borders, A permanent population, An effective government with functioning institutions (e.g. political, legal, social, economic), • Legally recognised control over citizens within this territory(By the UN)(sovereignty)", keyword: "territory; population; government; legal recognition"},
{answer:"Currently there are two states that have “non‐member state” observer status at the UN: Palestine and the Holy See", keyword: "Palestine; Holy See"},
{answer:"A state, (list four key characteristics),nations are groups of people who share cultural characteristics such as language, culture and historical identity, a Nation-State is a political social grouping in which people within territorial boundaries, with recognised sovereignty, (i.e. within a state) have common bonds based on culture, language and history. example of a state: Australia, example of a Nation: Chechnya, example of a Nation-State: Japan", keyword: "State; sovereignty; nation; ethnic group; Nation-State; sovereignty and ethnic ties; S: Australia; N: Chechnya; NS: Japan"},
{answer:"the Peace of Westphalia (1648) was  the legal foundation for the modern international political order, known as the Westphalian model, through recognition Rulers decided that the creation of self‐contained states, based on the of principles of sovereignty and territoriality", keyword: "legal foundation; political order; 1648; recognition; sovereignty and territoriality"},
{answer:"The Peace of Westphalia was based on the following principles: the world is divided into sovereign territorial states with no superior authority – all states are regarded as equal, the processes of law‐making, the settlement of disputes and law enforcement are in the hands of the state, • no state should intervene in the affairs of another state, the goal of international law is to promote co‐existence", keyword: "Westphalia; state equality; right to lawmaking; no state intervention; promote co‐existence"},
{answer:"Sovereignty is the legitimate or widely recognised ability to exercise effective control of a territory within recognised borders. Sovereignty within a state is generally vested in a government, which is seen to have a legitimate right to control its citizens and armed forces.", keyword: "sovereignty; right  to exercise power; control territory; recognised borders"},
{answer:"Internally, the role of the state is to meet the needs of its citizens, Externally, its role is to promote the state’s key national interestobjectives:", keyword: "Internally; Citizen needs; Externally; natinal interest"},
{answer:"National intrest is the concept used to justify policy preferences and actions, and includes the goals orobjectives of foreign policy. States promote it through ensuring national, regional, global security and developement, maintaining economic growth, preserving national culture and territorial entegrity", keyword: "national interest; construct of foreign policy; through security; economic growth; culture; territory"},
{answer:"Sovereignty of States can be challenged by non-state actors (international organisations like the UN, regional organisations like the EU, Non-governement organisations Greenpeace, Translational corporations Microsoft, other non‐state actors, such as ISIS) Through exercising soft  and hard power to influence and coerce states to support the interests of non-state actors", keyword: "non‐state actors; challenge sovereignty; Intergovernmental, regional, Non-governement organisations; Translational corporations; other non‐state actors; UN; EU; Greenpeace; Microsoft; ISIS; coerce states"},
{answer:"A political party is a coalition of politcians with common goals and ideas. Functions include: Mobilise the electorate, gain the authority to excercise power, Push candidates for office, articulate philosophy, develop policy, make up government. ", keyword: "coalitionof politcians; provide government, policy, candidates"},
{answer:"Hard Power involves direct use of force to achieve goals on an international arena, while soft power involves reaching conclusions based on mutual agreement", keyword: "Hard Power; Force; Soft Power; agreement"},
{answer:"Economic Power could be measured through GDP(gross domestic product), PPP(purchasing power parity, total economic power), GDP per capita(gdp per citizen). Military Power can be measured by yearly miltary budget, percentage of global arms tade, nuclear potential. Political Power can be measured in participation in international organisations, Political stability, Corruption index. population pwer could be measured in population size, growth, Human developement index. Territorial power - size, natural resources, geo-strategic location.", keyword: "Have fun lol"},
{answer:"Challenging power could be done through protest. A protest involves a massed event, organised to draw attention, scrutinise and voice opposition to current government policy. An example includes protest over Trump's Muslim ban", keyword: "Protest; massed opposition; to policy; Trump;"},
{answer:"1)Media has power to influence the political landscape through manipulating public opinion. 2) Media has power to influence the political landscape through scrutinising policy. 3) Media has power to influence the political landscape through presenting bias", keyword: "opinion; policy scrutiny; bias"},
];
var selectedQ = "";
var selectedQId = 0;
//functions 
var done = function() {
	alert("ALL DONE BOI");
	return;
};
var push = function() {
	if(questions.length > 0) {
	var answer = document.getElementById("answer").value;
	document.getElementById("panel").innerHTML += "<h4>" + "YOUR ANSWER: " + "</h4>" + "<p class='yourAnswer'>" + answer + "</p>" + "<br />";
	document.getElementById("answer").value = null;
	fullAnswer();
	} else {
		fullAnswer();
	};
};
var randomQ = function () {
	selectedQId = Math.floor(Math.random()* questions.length);
	selectedQ = questions[selectedQId];
	document.getElementById("panel").innerHTML += "<h4>" + "Question: " + "</h4>" + "<p class='question'>" + selectedQ + "?" + "</p>" + "<br / ><br />";
};
var fullAnswer = function() {
	document.getElementById("panel").innerHTML += "<h4>" + "Complete Answer: " + "</h4>" + "<br />" + "<p class='answers'>" + answers[selectedQId].answer + "</p>" + "<br / >";
	document.getElementById("panel").innerHTML += "<span>" + "Key Words: " + answers[selectedQId].keyword + "<br / ><br />";
	questions.splice(selectedQId, 1);
	answers.splice(selectedQId, 1);
	init();
};
var init = function() {
	if (questions.length == 0) {
		done();
	}else{
		randomQ();
	};	
};
init();