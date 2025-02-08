"use strict";

{
	// callMap path/SDK/instance.js
	
	const SDK = globalThis.SDK;
    const BEHAVIOR_CLASS = SDK.Behaviors.aekiro_dialog;

	BEHAVIOR_CLASS.Instance = class aekiro_dialogInstance extends SDK.IBehaviorInstanceBase 
	{
		constructor(sdkBehType, behInst)
		{
			super(sdkBehType, behInst);
		}
		Release()
		{
		}
		OnCreate()
		{
		}
		OnPropertyChanged(id, value)
		{
		}
		LoadC2Property(name, valueString)
		{
			return false;       // not handled
		}
	};
}
