#!/bin/bash
cd `dirname $0`

mkdir -p public/assets/js
mkdir -p public/assets/css
mkdir -p public/images

for js in `find src/assets/js/ -name *.js | grep -v min.`;do
	dst=${js/src/public}
	dst="${dst%%.js}.min.js"
	npx uglifyjs --compress --mangle -- ${js} >| ${dst}
done

for css in `find src/assets/css/ -name *.css | grep -v min.`;do
	dst=${css/src/public}
	dst="${dst%%.css}.min.css"
	npx cleancss ${css} >| ${dst}
done

for jpg in `find src/images/ -name *.jpg`;do
	dst=${jpg/src/public}
	cwebp -q 75 -metadata icc -sharp_yuv ${jpg} -o ${dst%%.jpg}.webp
done

for png in `find src/images/ -name *.png`;do
	dst=${png/src/public}
	cwebp -lossless -metadata icc ${png} -o ${dst%%.png}.webp
done

npx purgecss --css public/assets/css/*.css --content public/index.html public/assets/js/*.js --output public/assets/css
