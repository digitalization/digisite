
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
			tagline: "SCADA system with LIMS interaction",
			keywords: ["SCADA", "LIMS", "PLC"],
			thumb: "assets/images/projects/inobot-1.jpg"
		},
		{
			name: "Lavetan",
			client: "TECNIC",
			tagline: "SCADA system with LIMS interaction",
			keywords: ["SCADA", "LIMS", "PLC"],
			thumb: "assets/images/projects/inobot-2.jpg"
		},
		{
			name: "Inobot",
			client: "TECNIC",
			tagline: "A piece of junk which does stuff",
			keywords: ["SCADA", "LIMS", "PLC"],
			thumb: "assets/images/projects/inobot-3.jpg"
		},
		{
			name: "TAPR",
			client: "TECNIC",
			tagline: ".NET and PLC programming with USB communication",
			keywords: [".NET", "USB", "PLC"],
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
			name: "Neurocenter",
			client: "The psychology company",
			tagline: "Cognitive tests suite for attention and memory disorders",
			keywords: ["Cognitive tests", "Security"],
			thumb: "assets/images/projects/neuro.jpg"
		}
	];
});