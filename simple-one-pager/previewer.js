class TeamMember {
    #name = null;
    #imgLink = null;
    #description = null
    #previous = null;
    #next = null;

    constructor(name, imgLink, description) {
        this.#name = name;
        this.#imgLink = imgLink;
        this.#description = description;
    }

    get member() {
        return {
            name: this.#name,
            img: this.#imgLink,
            desc: this.#description
        }
    }

    get next() {
        return this.#next;
    }

    get previous() {
        return this.#previous;
    }

    set next(next) {
        this.#next = next;
    }

    set previous(previous) {
        this.#previous = previous;
    }
}

function createTeamMembers() {
    const first = new TeamMember(
        "Max Jones",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ninjaonlinedating.com%2Fblog%2Fwp-content%2Fuploads%2F2019%2F08%2FSmileModifiedKRAK.jpg&f=1&nofb=1&ipt=6aca3aa4039c400ffd7192630a7d85567602e3aec7992a0057df2872862b6e3f&ipo=images",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor id. Tincidunt tortor aliquam nulla facilisi cras. Sed blandit libero volutpat sed. Tincidunt vitae semper quis lectus nulla. Pharetra vel turpis nunc eget lorem dolor. Sapien faucibus et molestie ac feugiat. Ut venenatis tellus in metus vulputate eu. Cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Pellentesque nec nam aliquam sem et tortor consequat id. Sed euismod nisi porta lorem mollis aliquam. Rutrum quisque non tellus orci ac. Non odio euismod lacinia at quis. At erat pellentesque adipiscing commodo elit. Pharetra massa massa ultricies mi quis hendrerit dolor. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero.")

    const second = new TeamMember(
        "Tera White",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg.jpg&f=1&nofb=1&ipt=e378f89cab84a304d69f744eb36541dcc7f2bacad3ded86bf6e6ae4be82d7864&ipo=images",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Ipsum faucibus vitae aliquet nec. Tortor dignissim convallis aenean et. Nisl purus in mollis nunc sed id. Eget nunc scelerisque viverra mauris in aliquam sem. Enim nunc faucibus a pellentesque sit amet. Non blandit massa enim nec. Sit amet aliquam id diam maecenas ultricies mi eget. At quis risus sed vulputate odio ut enim blandit volutpat. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Risus viverra adipiscing at in tellus. Commodo elit at imperdiet dui. Nunc sed velit dignissim sodales ut eu sem integer vitae."
    );

    const third = new TeamMember(
        "Larry Page",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F97%2F31%2F02%2F9731022f0be7c965e880505461643850.jpg&f=1&nofb=1&ipt=37f7ce7ee239008c33037c06882fc8b9712093c9fd3ac3b1141a7eea94a8b9d1&ipo=images",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra orci sagittis eu volutpat odio facilisis mauris. Maecenas ultricies mi eget mauris pharetra et. Id consectetur purus ut faucibus pulvinar. Id porta nibh venenatis cras sed felis eget velit. Id ornare arcu odio ut sem nulla pharetra. Tristique risus nec feugiat in fermentum posuere urna. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Integer vitae justo eget magna fermentum iaculis. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Nunc sed id semper risus in hendrerit gravida rutrum. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Pharetra massa massa ultricies mi quis. Tortor consequat id porta nibh venenatis cras. Id cursus metus aliquam eleifend mi. Sit amet risus nullam eget felis eget nunc lobortis mattis."
    );

    first.previous = third;
    first.next = second;

    second.previous = first;
    second.next = third;

    third.previous = second;
    third.next = first;

    return first;
}

document.addEventListener('DOMContentLoaded', () => {

    let first = createTeamMembers();


    const previousBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');

    const previewer = document.querySelector('#previewer');

    const memberName = previewer.querySelector('#member-name');
    const memberPicture = previewer.querySelector('#member-picture');
    const memberDescription = previewer.querySelector('#member-description');

    previousBtn.addEventListener('click', (e) => {
        e.preventDefault();
        first = first.previous;
        update();
    })

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        first = first.next;
        update();
    })

    update();

    function update() {
        memberName.innerText = first.member.name;
        memberPicture.setAttribute("src", first.member.img);
        memberDescription.innerText = first.member.desc;
    }
})