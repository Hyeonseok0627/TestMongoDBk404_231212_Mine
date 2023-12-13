// playground : 연습장 만들어서,
// 전체 실행: ctrl + alt + r
// 한줄 실행: ctrl + alt + s
use("testBlog");
db.users.insertOne({x:1});
db.users2.insertOne({ name:"HyeonSeok Lee", email:"lhs@gmail.com"});

use("testBlog");
db.users2.find();

use("testBlog");
db.users2.updateOne({name:"HyeonSeok Lee"}, {$set:{ age:31}});

db.users2.findOne({ name: "HyeonSeok Lee" });

db.users2.updateOne(
  { "name.first": "HyeonSeok2" },
  { $set: { "name.last": "Lee2" } }
);

use("testBlog");
db.users2.findOne({_id: ObjectId("6577d331c309b0c378426c7f")});

db.users2.updateOne(
  { _id: ObjectId("6577d331c309b0c378426c7f") },
  { $inc: { age: 1 } }
);

db.users2.deleteOne({ _id: ObjectId("6577d331c309b0c378426c7f") });

db.users2.find();