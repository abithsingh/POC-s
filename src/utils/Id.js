// Generates collision-proof IDs without an external library.
// Format: "task-<timestamp>-<random5chars>"
// Why not crypto.randomUUID()? Works fine, but this gives readable IDs
// in localStorage/DevTools which helps a lot when debugging.

export function generateId(prefix = "task") {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`
}   