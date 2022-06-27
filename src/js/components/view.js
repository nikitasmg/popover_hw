export class View {
    constructor(root) {
        this.root = root
        this.addWrapper()
        this.addButton()
        this.addPopover()
        this.button = document.querySelector('.button')
        this.popover = document.querySelector('.popover')
        this.addHandleButton()
    }

     addWrapper() {
        const wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')
        this.root.appendChild(wrapper)
    }

    addButton() {
        const button = document.createElement('button')
        const wrapper = document.querySelector('.wrapper')
        button.classList.add('button')
        button.innerText = 'Click to toggle popover'
        wrapper.appendChild(button)
    }

    addHandleButton() {
        this.button.addEventListener('click', () => {
            this.popover.classList.toggle('active')
        })

    }

    addPopover() {
        const wrapper = document.querySelector('.wrapper')
        const popover = document.createElement('div')
        popover.classList.add('popover')
        this.addTitle(popover)
        this.addBody(popover)
        wrapper.appendChild(popover)
    }

    addTitle(root) {
        const title = document.createElement('h3')
        title.classList.add('popover__title')
        title.innerText = 'Popover title'
        root.appendChild(title)
    }

    addBody(root) {
        const body = document.createElement('div')
        body.classList.add('popover__body')
        body.innerText = 'And here\'s some amazing content, It\'s very engaging. Right?'
        root.appendChild(body)
    }

}
