
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
			tagline: "Automation system with HMI, distribution logic and LIMS interaction",
			keywords: ["SCADA", "LIMS", "PLC", "HMI"],
			thumb: "assets/images/projects/inobot-1.jpg"
		},
		{
			name: "Lavetan",
			client: "TECNIC",
			tagline: "Automation system with HMI, distribution logic en LIMS interaction",
			keywords: ["SCADA", "LIMS", "PLC", "HMI"],
			thumb: "assets/images/projects/inobot-2.jpg"
		},
		{
			name: "Inobot",
			client: "TECNIC",
			tagline: "Robot which automates 3M Petri Film innoculation",
			keywords: ["SCADA", "LIMS", "PLC"],
			thumb: "assets/images/projects/inobot-3.jpg"
		},
		{
			name: "TAPR",
			client: "TECNIC",
			tagline: "Automated 3M Petri Film enumeration with .NET and embedded (Microchip) programming, USB communication and HMI",
			keywords: [".NET", "USB", "Embedded"],
			thumb: "assets/images/projects/inobot-4.jpg"
		},
		{
			name: "TNO demo",
			client: "TNO",
			tagline: "Portable demonstrator app with dynamically generated SVG elements",
			keywords: ["Portable app", "Browser storage", "SVG"],
			thumb: "assets/images/projects/cybercop.jpg"
		},
		{
			name: "Nena Sim",
			client: "Epona Medical",
			tagline: "The world’s most realistic baby simulator",
			keywords: ["Embedded"],
			thumb: "assets/images/projects/nena.jpg"
		}
	];
});