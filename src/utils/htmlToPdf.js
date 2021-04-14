// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default{
  install (Vue) {
    Vue.prototype.getPdf = function () {
      var title = this.title
      html2Canvas(document.querySelector('#pdfDom'), {
        allowTaint: true,
        useCORS:true,
        logging:true
      // }).then(
      }).then(function (canvas) {
        
      

        let contentWidth = canvas.width
        let contentHeight = canvas.height
        let pageHeight = contentWidth / 592.28 * 841.89
        let leftHeight = contentHeight
        let position = 0
        let imgWidth = 595.28
        let imgHeight = 592.28 / contentWidth * contentHeight
        
        let pageData = canvas.toDataURL('image/jpeg', 1.0)
        let PDF = new JsPDF('', 'pt', 'a4')
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
            leftHeight -= pageHeight
            position -= 841.89
            if (leftHeight > 0) {
              PDF.addPage()
            }
          }
        }
        PDF.save(title + '.pdf')
      }
      // function(canvas) {

      //   var contentWidth = canvas.width;
      //   var contentHeight = canvas.height;
      
      //   var pageData = canvas.toDataURL('image/jpeg', 0.4);
      
      //   var pdfWidth = (contentWidth + 10) / 2 * 0.75;
      //   var pdfHeight = (contentHeight + 200) / 2 * 0.75; // 500为底部留白
      
      //   var imgWidth = pdfWidth;
      //   var imgHeight = (contentHeight / 2 * 0.75); //内容图片这里不需要留白的距离
      
      //   var pdf = new JsPDF('', 'pt', [pdfWidth, pdfHeight]);
      //   pdf.addImage(pageData, 'jpeg', 0, 0, imgWidth, imgHeight);
      //   pdf.save(title + '.pdf');
      // }
 
      )
    }
  }
}




































