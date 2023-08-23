// Fixes a bug where ngsp silence effect at TSHM 2nd boss and missing hp bar at FIHM 3rd boss
// Written by: icebrog

module.exports = function PVE_FIXes(mod) {
	let boss_data = 7591003,
		boss_abn = 905649,
		boss_id = null
		
	mod.hook('S_ABNORMALITY_BEGIN', 4, {order: -10000}, event => {
		if (boss_abn == event.id) return false
	})
}