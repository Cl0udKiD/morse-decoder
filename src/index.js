const lib = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ' ':      ' '
};

function decode(str) {
    var arr=[];
    for (let i=0;i<str.length;++i){
        if ((i+1)%10==0) {arr.push(str.substring(i-9,i+1))}
    }
    marr=[]
    for (let i in arr){
        morse=''
        if (arr[i]=='**********') {morse=' '}else{
            for (let j=0;j<arr[i].length;++j){
                if (j%2==0) {
                    if (arr[i].substring(j,j+2)=='10') morse+='.'
                    if (arr[i].substring(j,j+2)=='11') morse+='-'
                }
            }
        }    
        marr.push(morse)
    }
    res=[]
    for (let i in marr){
        res.push(lib[marr[i]])
    }
    return res.join('')
}

module.exports = {
    decode
}
