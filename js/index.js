                                                        // ex 1
const gmail = "wwwtima.cherin@gmail.com";
const gmailCount = gmail.length;
const gmailQuantity = gmail.includes("@");
console.log(gmailCount, gmailQuantity);
                                                        // ex 2
const y = "My";
const e = "name";
const s = "is";
const fullName =`${y} ${e} ${s} Viktor`;
console.log(fullName);
                                                        // ex 3
const userName = "Лена";
const payment = 5000;
const paymentWindow = alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
                                                        // ex 4
const Name = "Timur";
const newName = Name.replace("T", "@");         
console.log(newName);
                                                        // ex 5
const me = "Timur Cherin";
console.log(me.indexOf(" "));
                                                        // ex 6
const balance = "Ваш баланс поповнено на 1";
const newBalance = `${balance}000`;
console.log(newBalance);
console.log(newBalance.length);
                                                        // ex 7
const result = 5+5+"5";
console.log(result, typeof result);
                                                        // ex 8
const productName = "Droid";
const pricePerItem = 3500;
const message = "You picked " + productName + ", price per item is " + pricePerItem + " credits";
console.log(message);
                                                        // ex 9
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const messageDroid = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(messageDroid);
                                                        // ex 10
const courseTopic = "JavaScript essentials";
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic.slice(0, 1);
const lastElement = courseTopic.slice(20, 21);
                                                        // ex 11
const text = "string";
const substring = text.slice(0, text.length);
console.log(substring);