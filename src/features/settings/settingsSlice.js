import {createSlice} from "@reduxjs/toolkit";


const settingsMap = {
    calendarByDistrictView: "SETTINGS_CALENDARBYDIST_VIEW"
}

const defaultSettings = {
    calendarByDistrictView: "table",
    calendarByDistrictAutoRefresh: false,
    calendarByDistrictAutoRefreshInterval: null

}

const initialState = {
    calendarByDistrictView: localStorage.getItem(settingsMap.calendarByDistrictView) || defaultSettings.calendarByDistrictView,
    calendarByDistrictAutoRefresh: false,
    calendarByDistrictAutoRefreshInterval: null
}


export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        resetSettings: (state, action) => {
            localStorage.setItem(settingsMap.calendarByDistrictView, defaultSettings.calendarByDistrictView);
        },
        setCalendarByDistrictView: (state, action) => {
            const { viewName } = action.payload;
            state.calendarByDistrictView = viewName;
            localStorage.setItem(settingsMap.calendarByDistrictView, viewName);
        },
        setCalendarByDistrictAutoRefreshInterval: (state, action) => {
            const { interval } = action.payload;
            if (interval === null) {
                state.calendarByDistrictAutoRefresh = false;
                state.calendarByDistrictAutoRefreshInterval = null;
            }
            else {
                state.calendarByDistrictAutoRefresh = true;
                state.calendarByDistrictAutoRefreshInterval = interval;
            }
        }
    }
});

export const {
    resetSettings,
    setCalendarByDistrictView,
    setCalendarByDistrictAutoRefreshInterval
} = settingsSlice.actions;

export const selectSettings = (state) => state.settings;

export default settingsSlice.reducer;
