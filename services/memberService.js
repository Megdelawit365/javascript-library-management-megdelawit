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

const viewAllMembers = () => {
    if (members.length == 0) {
        console.log("No members found.")
        return
    }
    console.log(`${members.length} members found:`)
    console.log(" ")

    for (const m of members) {
        console.log(m)
    }
}


const searchMembers = (query) => {
    // query is an object

    let field = ""
    let value = ""
    const result = []

    for (const key in query) {
        field = key
        value = query[key]
    }

    for (const m of members) {
        if (m[field] === value) {
            result.push(m)
        }
    }

    if (result.length == 0) {
        console.log("No members found.")
        return
    }

    console.log("============= Search Result =============")
    for (const r of result) {
        console.log(r)
    }
}


const updateMember = (member) => {
    // check if member exists 
    let existingmember = -1
    for (let i = 0; i < members.length; i++) {
        if (members[i].id == member.id) {
            existingmember = i
        }
    }

    if (existingmember == -1) {
        console.log("member does not exist.")
        return
    }


    const isValid = validateMember(member, members)

    if (!isValid.valid) {
        console.log("============= Error =============")
        console.log(isValid.error)
        return
    }


    members[existingmember] = member

    console.log("member editted successfully.")
    console.log("Editted member:")
    console.log(members[existingmember])
    return

}

export { addMember, viewAllMembers, searchMembers, updateMember }
