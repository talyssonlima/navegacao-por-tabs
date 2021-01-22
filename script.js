function TabNavigation() {

    const html = {
        links: [...document.querySelector('.tab-links').children],
        contents: [...document.querySelector('.tab-content').children],
        openTab: document.querySelector('[data-open]')
    }

    function hideAllTabContent() {
        const contents = html.contents
        contents.forEach(section => {
            section.style.display = "none"
        })
    }

    function removeAllActiveClass() {
        html.links.forEach(tab => {
            tab.classList.remove('active')
        })
    }

    function addClassActive(element) {
        element.classList.add('active');
    }

    function showCurrentTab(id) {
        const tabContent = document.querySelector(`#${id}`)
        tabContent.style.display = "block"
    }

    function selectTab(event) {
        event.preventDefault();

        hideAllTabContent()
        removeAllActiveClass()

        const target = event.target
        showCurrentTab(target.dataset.id)
        addClassActive(target)
    }

    function listenForChange() {
        html.links.forEach(tab => {
            tab.addEventListener('click', selectTab)
        })
    }

    function openTabDefault(){
        html.openTab.click()
    }

    function init() {
        hideAllTabContent()
        listenForChange()
        openTabDefault()
    }

    return {
        init
    }

}

window.addEventListener('load', () => {
    const tabNavigation = TabNavigation();
    tabNavigation.init()
})

