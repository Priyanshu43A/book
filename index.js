const content = [
    "Humanity has long been divided into two broad categories based on belief in a higher power: theists, who believe in the existence of a god or gods, and atheists, who do not. However, this binary division is a relatively recent development in the long arc of human history. If we go back to the early stages of human evolution, there was no formal distinction between theists and atheists. Instead, there were various beliefs and ways of thinking that shaped human understanding of existence, life, and the world around them.",
    
    "Back then, what we now call 'god' was not an abstract or metaphysical concept. For early humans, gods often represented the most powerful beings known to them—leaders, priests, or kings. These individuals embodied authority, strength, and the ability to provide for or protect their communities. The belief in such figures as superior beings was natural, as they played pivotal roles in human survival and societal organization.",
    
    "As humanity evolved, so too did its beliefs. The concept of god shifted, becoming more abstract and spiritual, ultimately leading to the organized religions and belief systems we know today. This evolution divided people into different groups, castes, and religions, each with its own interpretation of the divine and how to worship or honor it. Some people followed these beliefs willingly, while others were coerced into adopting certain ideologies to fit into society.",
    
    "This division in thought and belief, driven by societal evolution, has profoundly shaped the way humanity functions. Instead of unifying people, differences in belief have often led to conflict, with various groups asserting their version of truth and seeking to impose it on others. The desire for superiority—whether in the realm of belief, power, or morality—has driven much of this discord.",
    
    "But at the core, there is a distinction between the concepts that have been blurred by time and misunderstanding: The Creator: The Creator refers to the unknown force or being responsible for the creation of everything in existence. This idea transcends any particular religion or cultural belief system. The Creator is not bound by names like God, Allah, or Christ. It represents the ultimate, supreme power behind the universe, a power that may never be fully understood but is universally acknowledged as the origin of all things.",
    
    "God: God, on the other hand, is a more subjective concept. Throughout history, many people have identified individuals or entities as gods—kings, priests, leaders, or even beggars. For early humans, 'god' could have been the most capable or influential person they knew. In this sense, god is not necessarily a divine, all-powerful being but rather someone who stands above others in terms of capability or influence. What defines a god for one person may differ for another, and no one can force their conception of god onto others.",
    
    "Religion: Religion is a set of beliefs, practices, and moral guidelines meant to help individuals understand themselves and their place in the world. At its core, religion is not about division or conflict; rather, it seeks to teach humanity the values necessary to live meaningful, ethical lives. Every religion—whether it be Hinduism, Islam, Christianity, or any other—ultimately shares the same purpose: to guide people toward becoming better humans. The differences between religious texts like the Gita, Quran, or Bible are superficial, much like the differences between languages. Just as a sentence remains the same regardless of whether it is written in Hindi, Sanskrit, or English, the fundamental teachings of religions remain the same despite differences in names or cultural contexts.",
    
    "Unfortunately, humanity has often failed to grasp these distinctions. Instead of recognizing the common goals of understanding, compassion, and growth that all belief systems share, people have become entangled in the pursuit of power and superiority. They have conflated the roles of the Creator, god, and religion, leading to misunderstandings and conflict. This desire to be 'everything'—to embody the Creator, god, and the authority of religion—has only deepened divisions rather than fostering unity.",
    
    "In conclusion, the evolution of belief has shaped human history and continues to influence our world today. However, by understanding the differences between the Creator, god, and religion, we can better appreciate the diversity of thought and belief without falling into the trap of superiority and division. True wisdom lies not in forcing others to accept our beliefs but in recognizing the shared humanity that underlies them all."
];

let currentPage = 0;
const itemsPerPage = 1;

function renderPage() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>${content[currentPage]}</p>`;

    document.getElementById('page-info').innerText = `Page ${currentPage + 1} of ${content.length}`;

    document.getElementById('prev').disabled = currentPage === 0;
    document.getElementById('next').disabled = currentPage === content.length - 1;
}

function changePage(direction) {
    currentPage += direction;
    renderPage();
}

function showContent() {
    document.querySelector('.cover-page').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    renderPage();
}

