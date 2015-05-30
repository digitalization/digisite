
/**
 * Module definition and dependencies
 */
angular.module('DigiSite.Shared.Projects.Service', [])

/**
 * Factory definition
 */
.factory('Projects', function() {
	return [
		{
			name: "Eurofins Nantes",
			client: "TECNIC",
			tagline: "Automation system with web-based interface, distribution logic and LIMS interaction.",
			keywords: ["SCADA", "LIMS", "PLC", "HMI"],
			thumb: "assets/images/projects/inobot-3.jpg"
		},
		{
			name: "Inobot",
			client: "TECNIC",
			tagline: "Standalone or integrateable robot used to automate 3M Petrifilm&#8482; innoculation.",
			keywords: ["SCADA", "LIMS", "PLC"],
			thumb: "assets/images/projects/inobot-1.jpg"
		},
		{
			name: "SelectaDNA",
			client: "Rhine Group B.V.",
			tagline: "Secure database for anti theft kit registration with police login.",
			keywords: ["Security", "Web Application"],
			thumb: "assets/images/projects/sdna.jpg"
		},
		{
			name: "TAPR",
			client: "TECNIC",
			tagline: "Automated 3M Petrifilm&#8482; enumeration with .NET and embedded (Microchip) programming, USB communication and graphical interface.",
			keywords: [".NET", "USB", "Embedded"],
			thumb: "assets/images/projects/inobot-4.jpg"
		},
		{
			name: "TNO demo",
			client: "TNO",
			tagline: "Portable demonstrator app for risk simulation with a scenario runner, data persistence and dynamically generated SVG graphics.",
			keywords: ["Portable app", "Browser storage", "SVG"],
			thumb: "assets/images/projects/cybercop.jpg"
		},
		{
			name: "Nena Sim",
			client: "Epona Medical",
			tagline: "The world’s most realistic baby simulator, with embedded programming, scenario runner and multi-platform graphical interface.",
			keywords: ["Embedded"],
			thumb: "assets/images/projects/nena.jpg"
		}
	];
});
