self.onmessage = function(e) {
    const from = e.data.from;
    const to = e.data.to;
    var osszeg = 0;
for (var i = from; i <= to; i++)
{
    osszeg += i;
}
postMessage(osszeg); 
};