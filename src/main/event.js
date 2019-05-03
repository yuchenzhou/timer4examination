import {plans, loadHistoryFromFile} from "./history";
import {settings} from "./setting";
import {defaultPlan} from "./setting";

export let planName = plans[0].name;

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
export function getPlan() {
    for (const plan in plans){
        if (plans[plan].name === planName){
            return plans[plan];
        }
    }
    return planName;
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
        if (plans[plan].name === planName){
            plans[plan].subjects.push(subject);
            // TODO:add into timer
            break;
        }
    }
}

export function editSubject(subject) {
    for (const plan in plans){
        if (plans[plan].name === planName){
            const subjects = plans[plan].subjects;
            for(const i in subjects){
                if(subjects[i].id === subject.id){
                    subjects[i] = subject;
                    break;
                }
            }
            // TODO:add into timer
            break;
        }
    }
}

export function deleteSubject(subjectId) {
    for (const plan in plans){
        if (plans[plan].name === planName){
            // TODO: delete from timer.2
            for(const subject in plans[plan].subjects){
                if(plans[plan].subjects[subject].id === subjectId)
                {
                    plans[plan].subjects.splice(subject,1);
                }
            }
            break;
        }
    }
}

