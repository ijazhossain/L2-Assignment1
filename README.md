# Project Title

ব্লগ১ঃ What are some differences between interfaces and types in TypeScript?

Typescript এ Interface এবং type এর মধ্যে কিছু পার্থক্য আছেঃ
১। Interface সাধারণত অবজেক্ট এর টাইপ declear করতে ব্যবহৃত হয়, আর type ব্যবহার করা হয় যে কোন ধরনের union, primitive, tuple ইত্যাদি জন্য। 
২। Interface কে extend বা merge করা গেলেও Type একবার ডিফাইন হইলে তা আর merge করা যাই না।
৩। type union ও primitive টাইপ তৈরি করতে পারে, Interface পারে না। 