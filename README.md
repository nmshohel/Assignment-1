#What are some differences between interfaces and types in TypeScript?
#উত্তরঃ ইন্টারফেস ইউনিয়ন, ম্যাপড টাইপ, অথবা কন্ডিশনাল টাইপ এ ব্যবহার করা যায় না। টাইপ যেকোনো জায়গায় ব্যবহার করা যায়। 

##What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
উত্তরঃ Enum: একটি নির্দিশ্ট সংখ্যক ‍স্টিং কে সেট করে রাখার জন্য enum ব্যবহার করা হয়। যা পরবর্তীতে সহজে ব্যবহার করা যায়।
Numeric enum এর উদাহরনঃ 
enum Role {
  User = 1,
  Admin = 2,
  SuperAdmin = 5
}
console.log(Status.User);
String enum এর উদাহরনঃ
enum MyColor {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}
console.log(MyColor.Red);