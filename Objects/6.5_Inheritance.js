function StudyClass(name, videoID)
{
    this.name = name;
    this.videoID = videoID;
};

const studyClass1 = new StudyClass('Welcome!', 123);
const studyClass2 = new StudyClass('See you soon!', 456);

console.log(studyClass1);
console.log(studyClass2);

//Demo New
function newClass(f, ...params)
{
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
};

const studyClass3 = newClass(StudyClass, 'Welcome!', 123);
const studyClass4 = newClass(StudyClass, 'See you soon!', 456);

console.log(studyClass3);
console.log(studyClass4);