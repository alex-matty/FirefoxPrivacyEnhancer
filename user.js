// Testing user.js on firefox profiles to create a better more private experience

/* 
	This is a template for privacy enhancement for Firefox.
	it is recommended to use as a template. Change values according to your needs
	It is not a complete list, I will work on improving to get better results
	Remember this is not a complete anonymizer. For better results you should check other options
*/

// Disable Normandy Services (This will stop firefox telemetry services)
user_pref("app.normandy.enabled", false);

// Disable some stuff
user_pref("app.releaseNotesURL", "about:blank");

// Change Default Homepage delete saved Bookmarks
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.bookmarks.restore_default_bookmarks", true);

// Stop Caching stuff
user_pref("browser.cache.disk.amount_written", 0);
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.enable", false);

// Stop adding recent downloaded document to recent documents
user_pref("browser.download.manager.addToRecentDocs", false);

// Disabe DRM alert POP-UP (Encrypted Media Extension)
user_pref("browser.eme.ui.enabled", false);

// Disable URL Prefix and Suffix guessing and completing
user_pref("browser.fixup.alternate.enabled", false);

// Disable Later Run
user_pref("browser.laterrun.enabled", false);

// Disabe Region Basic Layout selection
user_pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false);

// Disable searching from the addresss bar
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);

// Disable warning when accessing about:config
user_pref("browser.aboutConfig.showWarning", false);

// DOM Security
//		Activate HTTPS only mode
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode.upgrade_local", true);
user_pref("dom.security.https_only_mode.upgrade_onion", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// DOM autocomplete Autofill
user_pref("dom.forms.autocomplete.formautofill", false);

// Disable Form Fill
user_pref("browser.formfill.enable", false);

// Search Preferences
user_pref("browser.preferences.search", false);

// Private Browsing
// Start Firefox in private mode
user_pref("browser.privatebrowsing.autostart", true);

// Stop sending crash reports
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.reportProcessHangs", false);

// Cancel form autofills
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.firstTimeUse", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.formautofill.section.enabled", false);

// Disable some Geolocation
user_pref("geo.enabled", false);
user_pref("geo.provider.network.url", "");

// Deactivate Firefox accounts
user_pref("identity.fxaccounts.toolbar.enabled", false);

// Stop using media stats
user_pref("media.video_stats.enabled", false);
user_pref("network.cookie.rejectForeignWithExceptions.enabled", true);
user_pref("network.http.referer.spoofSource", true);

// Stop remeber history (Delete visited pages at close)
user_pref("places.history.enabled", false);

// Enable privacy settings
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.origin_telemetry.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// Harden SSL requests
user_pref("security.OCSP.require", true);
user_pref("security.block_Worker_with_wrong_mime", true);
user_pref("security.cancel_non_local_loads_triggered_by_systemprincipal", true);
user_pref("security.pki.mitm_detected", true);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

// Stop using other tools
user_pref("services.sync.prefs.sync.privacy.fuzzyfox.enabled", true);
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Geo-Specific searches
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");

// Change Browser Search Region
user_pref("browser.search.region", "US");

// Distribution Spoofing
user_pref("distribution.about", "");
user_pref("distribution.id", "");
