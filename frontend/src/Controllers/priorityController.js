/* eslint-disable import/no-anonymous-default-export */

const colors = ["#b33a3a","#541690","#4E944F"]

export default (priority) => {
    const level = ["Priority: High", "Priority: Medium", "Priority: Low"]

    return {
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}