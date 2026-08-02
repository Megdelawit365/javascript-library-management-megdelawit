import { members } from '../data/members.js'
import { validateMember } from '../utils/validator.js'
import { generateId } from '../utils/helpers.js'


const addMember = (member) => {
    const isValid = validateMember(member, members)

    if (!isValid.valid) {
        return {
            success: false,
            error: isValid.error
        }
    }

    member.id = generateId(members)
    members.push(member)

    return {
        success: true,
        message: "Member successfully added.",
        member: member
    }
}

const viewAllMembers = () => {
    return {
        totalMembers: members.length,
        members: members
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

    return {
        totalResults: result.length,
        result: result
    }
}


const updateMember = (member) => {
    // check if member exists 
    let existingMember = -1
    for (let i = 0; i < members.length; i++) {
        if (members[i].id == member.id) {
            existingMember = i
        }
    }

    if (existingMember == -1) {
        return {
            success: false,
            error: "Member does not exist."
        }
    }


    const isValid = validateMember(member, members)

    if (!isValid.valid) {
        return {
            success: false,
            error: isValid.error
        }
    }


    members[existingMember] = member

    return {
        success: true,
        message: "member successfully editted.",
        member: members[existingMember]
    }
}

const deleteMember = (memberId) => {
    const member = members.find(m => m.id === memberId)
    if (!member) {
        return {
            success: false,
            error: "Member does not exist"
        }
    }
    if (member.borrowedBooks.length > 0) {
        return {
            success: false,
            error: "Member has unreturned books."
        }
    }
    members = members.filter(b => b.id !== memberId);
    return {
        success: true,
        message: "Member successfully removed."
    }

}

export { addMember, viewAllMembers, searchMembers, updateMember }
