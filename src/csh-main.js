/*
 * @Author: csh
 * @Date: 2023-10-10 18:41:30
 * @LastEditors: csh
 * @LastEditTime: 2023-11-12 00:24:51
 * @FilePath: /csh-plugin/src/csh-main.js
 * @Description: 
 */
import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  console.log(123)
  const doc = sketch.getSelectedDocument()
  const selectedLayers = doc.selectedLayers
  const selectedCount = selectedLayers.length

  if (selectedCount === 0) {
    sketch.UI.message('没有图层被选中-csh')
  } else {
    sketch.UI.message(`${selectedCount} 个图层被选中了.`)
  }
}