const faqData = [
    {
        question: "How do I register for a new account?",
        answer: `1. Click the "Sign In/Register" icon in the top right corner.<br>
        2. In the pop-up, click the blue "Register" button at the bottom.<br>
        3. You'll be taken to the registration page.<br><br>
        For current business accounts: Choose the "I AM A CURRENT CUSTOMER BUT NEED AN ONLINE ACCOUNT" tab, fill in your details, and submit. We'll review your application and email you once approved.<br><br>
        For general retail users: Select the "New Retail Customer Account" tab, fill out the form, and submit. You'll get immediate access to shop with a credit card.`
        // ... include other FAQ items here
    },
    // ... other questions and answers
];

const accordion = document.getElementById('accordion');

function populateFAQs() {
    accordion.innerHTML = '';
    faqData.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `<div class="faq-question" onclick="toggleFAQ(${index})">${faq.question}</div>
                             <div class="faq-answer">${faq.answer}</div>`;
        accordion.appendChild(faqItem);
    });
}

function toggleFAQ(index) {
    const answerDiv = accordion.children[index].querySelector('.faq-answer');
    const isVisible = answerDiv.style.display === 'block';
    answerDiv.style.display = isVisible ? 'none' : 'block';
}

function searchFAQs() {
    const searchValue = document.getElementById('faq-search').value.toLowerCase();
    document.querySelectorAll('.faq-item').forEach((item) => {
        const question = item.querySelector('.faq-question').textContent.toLowerCase();
        item.style.display = question.includes(searchValue) ? '' : 'none';
    });
}

// Initialize FAQs
populateFAQs();
