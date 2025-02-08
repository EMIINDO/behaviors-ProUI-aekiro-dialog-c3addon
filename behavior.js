//Converted with C2C3AddonConverter v1.0.1.1
"use strict"; 
 // Porting BY EMI INDO with c3addon-ide-plus


{
	const SDK = globalThis.SDK;
	const lang = self.lang;
	
	const BEHAVIOR_ID = "aekiro_dialog";
	// callMap Deprecated const PLUGIN_VERSION = "1.822";
	const BEHAVIOR_CATEGORY = "other";
	const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_dialog = class aekiro_dialog extends SDK.IBehaviorBase
	{
		constructor()
		{
			super(BEHAVIOR_ID);
			SDK.Lang.PushContext("behaviors." + BEHAVIOR_ID.toLowerCase());
			this._info.SetName(globalThis.lang(".name"));
			this._info.SetDescription(globalThis.lang(".description"));
			// callMap Deprecated this._info.SetVersion(BEHAVIOR_VERSION);
			this._info.SetCategory(BEHAVIOR_CATEGORY);
			this._info.SetAuthor("Aekiro");
			this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
			this._info.SetIsOnlyOneAllowed(true);

			this._info.SetSupportedRuntimes(["c3"]);

			SDK.Lang.PushContext(".properties");
			this._info.SetProperties([
				new SDK.PluginProperty("combo", "open-animation", {initialValue:"none", items:["none","slidedown","slideup","slideleft","slideright","scaledown","scaleup"]}),
				new SDK.PluginProperty("combo", "open-animation-tweenning", {initialValue:"quadratic out", items:["linear","quadratic out","quartic out","exponential out","circular out","back out","elastic out","bounce out"]}),
				new SDK.PluginProperty("integer", "open-animation-duration", 300),
				new SDK.PluginProperty("text", "open-sound", ""),
				new SDK.PluginProperty("combo", "close-animation", {initialValue:"none", items:["none","reverse","slidedown","slideup","slideleft","slideright","scaledown","scaleup"]}),
				new SDK.PluginProperty("combo", "close-animation-tweenning", {initialValue:"quadratic out", items:["linear","quadratic out","quartic out","exponential out","circular out","back out","elastic out","bounce out"]}),
				new SDK.PluginProperty("integer", "close-animation-duration", 300),
				new SDK.PluginProperty("text", "close-sound", ""),
				new SDK.PluginProperty("text", "close-button-name", ""),
				new SDK.PluginProperty("combo", "is-modal", {initialValue:"no", items:["no","yes"]})
			]);
			SDK.Lang.PopContext();		// .properties
			SDK.Lang.PopContext();
		}
	};
	BEHAVIOR_CLASS.Register(BEHAVIOR_ID, BEHAVIOR_CLASS);
}
