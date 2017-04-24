/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var myName = "Ravi Prakash Maurya";
 var myRole = "Computer Engineer";
 var formattedName = HTMLheaderName.replace("%data%",myName);
 var formattedRole = HTMLheaderRole.replace("%data%",myRole);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 
var bio = {
	"name" : "Ravi Prakash Maurya",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "9501784170",
		"email" : "rv.adyah@gmail.com",
		"github" : "adyah",
		"twitter" : "@rvadyah",
		"location" : "Mohali"
	},
	"welcomeMessage" : "Always look forward with target in ind and focus on raod and Enjoy the journey.",
	"skills" : [
		"awesomeness",
		"delivering things", 
		"cryogenic sleep",
		"saving the universe"
	],
	"biopic" : "E:\entertainment\images\mine\123.jpg"
}

var education = {
	
	"schools" : [
		
		{
			"name" : "B.S.M.Inter College",
			"city" : "Varanasi",
			"degree" : "10th",
			"majors" : "science",
			"date" : 2010,
			"url" : ""
		},
		{
			"name" : "B.S.M.Inter College",
			"city" : "Varanasi",
			"degree" : "12th",
			"majors" : "Non-medical",
			"date" : 2012,
			"url" : ""
		},
		{
			"name" : "Chandigarh University",
			"city" : "Mohali",
			"degree" : "B.E",
			"majors" : "Computer Science",
			"date" : 2017,
			"url" : "www.cuchd.in"
		}
		
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Crash Course",
			"school" : "Udacity",
			"dates" : 2017,
			"url" : "https://www.udacity.com/course/ud804"
		}
		
	]
}

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
	
	"projects" : [
	{
		"title" : "File Stacker",
		"dates" : "2015",
		"description" : "To stack the files based on their extentions."
		//"images" : [
			//"E:\entertainment\images\mine\_MG_3396.jpg",
			//"E:\entertainment\images\mine\_MG_3396.jpg"
		//]
	},
	{
		"title" : "Student Management System",
		"dates" : "2015",
		"description" : "to manage the student data"
		//"images" : [
			//"E:\entertainment\images\mine\_MG_3396.jpg",
			//"E:\entertainment\images\mine\_MG_3396.jpg"
		//]
	}
		
	]
}



if(bio.skills.length > 0){
	
	$("#header").append(HTMLskillsStart);
	
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
	
}
/*
for(job in work.jobs){
	
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDate);
	
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
	
}

*/


function displayWork(){
	
	$("#workExperience").append(HTMLworkStart);
	for(job in work.jobs){
	
	
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDate);
	
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	
	
}
}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  
  var x = loc.pageX;
  var y = loc.pageY;
  
  logClicks(x,y);	
  
  
});

$("#main").append(internationalizeButton);

function inName(name){
	
	var newName = name.trim().split(" ");
	console.log(newName);
	newName[0] = newName[0].slice(0,1).toUpperCase()+newName[0].slice(1).toLowerCase();
	newName[1] = newName[1].toUpperCase();
	
	newName = newName[0]+" "+newName[1];
	console.log(newName);
	return newName;
	
}
inName("ravi Prakash");


projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		
		/*if(projects.projects[project].images.length>0){
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}*/
	
	}
}

projects.display();






