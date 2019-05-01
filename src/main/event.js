import {plans, loadHistoryFromFile} from "./history";
import {settings} from "./setting";
import {defaultPlan} from "./setting";

let planName = "default";

export function init() {
    loadHistoryFromFile();
}

export function getPlans() {
    return plans
}
export function addPlan(pn) {
    const plan = {
        name: pn,
        subjects: [],
    };
    plans.push(plan);
}
export function getPlan(planName) {
    for (const plan in plans){
        if (plan.name === planName){
            return plan;
        }
    }
}
export function switchPlan(pn) {
    planName = pn;
}
export function deletePlan(pn) {
    for (let i=0;i<plans.length;i++){
        if (plans[i].name === pn)
        {
            // TODO delete schedules in timer
            plans.slice(i,1);
            break;
        }
    }
}


export function addSubject(subject) {
    for (const plan in plans){
        if (plan.name === planName){
            plan.subjects.push(subject);
            // TODO:add into timer
            break;
        }
    }

}

export function editSubject(subject) {

}

export function deleteSubject(subject) {
    for (const plan in plans){
        if (plan.name === planName){
            // TODO: delete from timer.2
            plan.subjects.remove(subject);
            break;
        }
    }
}
