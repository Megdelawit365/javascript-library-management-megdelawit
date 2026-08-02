import { members } from '../data/members.js'
import { validateMember } from '../utils/validator.js'
import { generateId } from '../utils/helpers.js'


const addMember = (member) => {
    const isValid = validateMember(member, members)

    if (!isValid.valid) {
        console.log("============= Error =============")
        console.log(isValid.error)
        return
    }

    member.id = generateId(members)
    members.push(member)

    console.log("============= Member added successfully! =============")
    console.log(member)
    return
}


