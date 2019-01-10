import mockData from './mockData'

function groupSelector () {
    return {}
}

function staff (id, belongId, selected) {
    const props = {
        id,
        belongId,
        selected
    }

    function toggleSelected () {
        props.selected = !props.selected
    }

    return {
        ...props,
        toggleSelected
    }
}

function department (id, belongId, selected) {
    const props = {
        id,
        belongId,
        selected
    }

    function toggleSelected () {
        props.selected = !props.selected
    }

    return {
        ...props,
        toggleSelected
    }
}