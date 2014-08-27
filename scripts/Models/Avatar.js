define(['Models/Utils'], function(Utils){

    function Avatar(source){
        source = Utils.object(source);
        var defaultPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAtCAQAAAB2OuFVAAAB1klEQVR4Ae2UsUtbURjFf1tDiwj5B8RCobgGg3Rx799QgtTBkqSb3Vzcuyq6qLx0FB0cHLvaQbNoF6c6JDiIJnkFEeH28LAv9yPvVk0edMnvTOc7554peQR5xTxf2OI7Z7ToSC3O5LZ0nVf6LEqs8QsXltI1tZ7EDN+4wz1Bd2rO8AifiXHPUKwXQQo0cEOoQYEMXrCLG1K7ej3ABm4EbYBlCTeilvB4w+XIg5daSdnE5aBNHnhLN5fBrpYSVnE5aRVR4DS3wVOtUeY+t8F7rbGMy1HLEA0ce/yk/ejTtlq9gWsER9jTV6Z4SZEPtMNjSotqTaltkyO4MIcV+rwL/Jy6SvqsmOwCrj17zgQ+65mD6/hMcO5l13Dj2T0slczBCpY9L7uxg4dYqpmDVSyH4cErpvE5yBw8wOc1V8FBad/7VNZxAdW9z/K+fHhQ+kGFOd4Thf9BShpqzFFR2wUGR9B/GRwPjgfHg+PBljnEdIzvqWIf9IzvEBvfgpo5LLBo/EfpX36RBeNriJ3UboPYTn3k+zSPgv0dEoo0E3tMEcTkg2+m/iTxJ0yafjP1x6YvyvyWSvR9zC3l1M8m+ayX3xJ7eQnlnhdVavh8oo7JJZ+6Gj61v/kfacadKNLKeEYAAAAASUVORK5CYII='
        this.src =  Utils.string(source.src) || defaultPic;
    }

    return Avatar;
});
