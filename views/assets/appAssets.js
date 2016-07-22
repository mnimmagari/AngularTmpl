module.exports = {

 assets : {
	"app-css": {
		"dev":[
			"/assets/w/styles/layout.css",
			"/assets/w/styles/pagestyles.css",
			"/assets/w/styles/materialform.css",
			"/assets/w/styles/dataview-table.css",
			"/assets/w/styles/dataview-panels.css",
			"/assets/w/styles/userpicker.css",

			"/assets/g/css/sidebar.css",
			"/assets/m/css/font.css",
			"/assets/w/styles/tooltip.css",
			"/assets/w/styles/angucomplete-alt.css"
		],
		"prod":[
			"/assets/w/styles/layout.min.css",
			"/assets/w/styles/pagestyles.min.css",
			"/assets/w/styles/materialform.min.css",
			"/assets/w/styles/dataview-table.min.css",
			"/assets/w/styles/dataview-panels.min.css",
			"/assets/w/styles/userpicker.min.css",

			"/assets/g/css/sidebar.css",
			"/assets/m/css/font.css",
			"/assets/w/styles/tooltip.css",
			"/assets/w/styles/angucomplete-alt.css"
		]
	},

	"utils":{
		"dev":[
			"/assets/g/js/utils.js"
		],
		"prod":[
			"/assets/g/js/utils.js"
		]
	},

	"index":{
		"dev":[
			"/assets/w/styles/index.css"
		],
		"prod":[
			"/assets/w/styles/index.css"
		]
	},

	"home":{
		"dev":[
			"/assets/w/styles/dashboard.css"
		],
		"prod":[
			"/assets/w/styles/dashboard.css"
		]
	},

	"admin":{
		"dev":[
			"/mods/admin/users/usersModule.js",
			"/mods/admin/users/usersControllerMain.js",
			"/mods/admin/users/usersRouter.js"
		],
		"prod":[
			"/mods/admin/users/usersModule.js",
			"/mods/admin/users/usersControllerMain.js",
			"/mods/admin/users/usersRouter.js"
		]
	},

	"dir-web":{
		"dev":[
			"/d/userProfile/script.js",
			"/d/userDisplay/script.js",
			"/d/user/script.js",
			"/d/fileUpload/script.js",
			"/d/fileAttachment/script.js",
			"/d/datePicker/script.js",
			"/d/confirmDialog/script.js",
			"/d/richText/script.js",
			"/d/tooltipDirective/script.js",
			"/d/autoComplete/script.js",
			"/d/autoComplete/angucomplete-alt.js",
			"/d/autoComplete/angucomplete-alter1.js"
		],
		"prod":[
		]
	},

	"profile":{
		"dev":[
			"/mods/profile/profileModule.js",
			"/mods/profile/profileControllerMain.js",
			"/mods/profile/profileRouter.js"
		],
		"prod":[
		]
	},

	"dir-mobile":{
		"dev":[
			"/d/userDisplay/script.js",
			"/d/scroll/scroll.js",
			"/d/header/header.js",
			"/d/userView/script.js"
		],
		"prod":[
		]
	},

	"m-common":{
		"dev":[
			"/assets/m/css/font.css",
			"/assets/m/css/style.css",
		],
		"prod":[

		]

	},

	"m-main":{
		"dev":[
			"/m/home/home.js",
			"/m/home/homeCtrl.js",
			"/d/geoLocation/locator.js",
			"/d/geoLocation/locator-tpl.js"
		]

	}

	}

};
