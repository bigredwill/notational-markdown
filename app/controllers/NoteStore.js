var EventEmitter = require('events').EventEmitter;
 
var emitter = new EventEmitter();
 
var notes = [
  {name: "Grocery List", tags: "food", date:"12/1/2015",rawContent:"#Raw", id:1},
  {name: "Writing", tags: "practice", date:"12/2/2015",rawContent:"#Raw", id:2 },
  {name: "Writing", tags: "practice", date:"12/3/2015",rawContent:"#Raw", id:3},
  {name: "Stats161B Notes", tags: "classes", date:"12/3/2015",rawContent:"#Raw", id:4},
  {name: "Writing", tags: "practice", date:"12/4/2015",rawContent:"#Raw", id:5},
  {name: "Grocery List", tags: "food", date:"12/5/2015",rawContent:"#Raw", id:6},
  {name: "Stats161B", tags: "classes", date:"12/5/2015",rawContent:"#Raw", id:7}
];
 
module.exports = {
  getNotes: function() {
    //return copy of array (immutable)
    return notes.concat();
  },
 
  subscribe: function(callback) {
    emitter.on('update', callback);
  },
 
  unsubscribe: function(callback) {
    emitter.off('update', callback);
  },
 
  newNote: function(note) {
    notes.push(note);
    emitter.emit('update');
  },

  editNote: function(note) {
    var index = notes.findIndex((e,i) => {return e.id == note.id});
    if(index != -1)
      notes[index] = note;
  }
};