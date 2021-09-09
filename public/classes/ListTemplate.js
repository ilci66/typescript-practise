export class ListTemplate {
    // gonna use the shorthand method to keep it cleaner
    constructor(container) {
        this.container = container;
    }
    // now need a render method to create 'li elements
    // that will accept the arguments: invoice or payment, a heading, and a position
    // that will create the necessary templates (li, h4, p)
    // that will add the 'li' template to the start or to the end of the list
    // now the type need to include both payment and invoice so it can't only be one of them
    // as both of them have the have the HasFormatter interface implemented I can use that for type here
    // the pos type is regular union type don't get confused
    render(item, heading, pos) {
        //now to create the elements
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        // as I chose the type as the interface that has format() I know I can use format()
        p.innerText = item.format();
        li.append('p');
        if (pos === "start") {
            // in costructor I chose the type as HTMLUListElement for the container
            this.container.prepend('li');
        }
        else {
            this.container.append('li');
        }
    }
}
