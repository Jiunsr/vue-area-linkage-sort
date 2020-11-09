![npm-version](https://img.shields.io/npm/v/vue-area-linkage-sort.svg) ![license](https://img.shields.io/npm/l/vue-area-linkage-sort.svg)
# vue-area-linkage-sort
- ### v5.2.0 新增特性（2020-11-09维护）
    - 支持首字母拼音排序（a,b,c..~z）
    - 支持用户自定义排序（新增dict属性，<a href="#特性示例">配置示例</a>）
- 省市区联动选择. 组合数据来源：[area-data](https://github.com/dwqs/area-data)

## Installation
Install the pkg with npm:
```
// v5之前的版本
npm i --save vue-area-linkage-sort

// v5及之后的版本
npm i --save vue-area-linkage-sort area-data
```
or yarn
```
// v5之前的版本
yarn add vue-area-linkage-sort

// v5及之后的版本
yarn add vue-area-linkage-sort area-data
```

## Usage
```
import Vue from 'vue';
import { pca, pcaa } from 'area-data'; // v5 or higher
import 'vue-area-linkage-sort/dist/index.css'; // v2 or higher
import VueAreaLinkage from 'vue-area-linkage-sort';

Vue.use(VueAreaLinkage)
```

```
// v5之前的版本
<area-select v-model="selected"></area-select>
<area-cascader v-model="selected2"></area-cascader>

// v5及之后的版本
<area-select v-model="selected" :data="pca"></area-select> // 省市
// 省市区：<area-select v-model="selected" :data="pcaa"></area-select>
<area-cascader v-model="selected2" :data="pca"></area-cascader> // 省市
// 省市区：<area-cascader v-model="selected2" :data="pcaa"></area-cascader>

//setting
<area-select type='all' :level='2' v-model="selected" :data="pcaa"></area-select>
<area-cascader type='all' v-model="selected2" :level='1' :data="pcaa"></area-cascader>
```

More demo to visit [here](https://dwqs.github.io/vue-area-linkage-sort/).

## On Demand Import
> version >= 2.1.2

安装 [babel-plugin-on-demand-import](https://github.com/dwqs/babel-plugin-on-demand-import): 

```
npm i babel-plugin-on-demand-import -D
```

修改 `.babelrc`: 

```
{
    // ...
    "plugins": [
        ["on-demand-import" {
            "libraryName": "vue-area-linkage-sort",
            "libraryPath": "dist/lib"
        }]
    ]
}
```

```
// Only import AreaCascader component
import { AreaCascader } from 'vue-area-linkage-sort';
Vue.use(AreaCascader);

<area-cascader v-model="val"></area-cascader>

// Only import AreaSelect component
import { AreaSelect } from 'vue-area-linkage-sort'; 
Vue.use(AreaSelect);

<area-select v-model="val2"></area-select>
```

## 属性
### area-select 组件
|  参数  |  类型  |  可选值  |  默认值  |  说明  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| type | String |  all/code/text | code | 设置返回的数据格式 |
| placeholders | Array | - | [] | 设置 placeholder text |
| level | Number | 0/1/2 | 1 | 设置联动层级(0-只选省份/1-省市联动/2-省市区联动) |
| size | String | small/medium/large | medium | 设置输入框的大小 |
| disabled | Boolean | - | false | 是否禁用 |
| data | Object | - | - | 地区数据 |

>v4 仅支持省市区联动，即 v4 不再支持 level 的值为 3(省市区街联动)

### area-cascader 组件
|  参数  |  类型  |  可选值  |  默认值  |  说明  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| type | String |  all/code/text | code | 设置返回的数据格式 |
| placeholder | String | - | '' | 设置 placeholder text |
| level | Number | 0/1 | 0 | 设置联动层级(0-省市联动/1-省市区联动) |
| size | String | small/medium/large | medium | 设置输入框的大小 |
| separator | String | - | '-' | 显示选中文本的分隔符 |
| disabled | Boolean | - | false | 是否禁用 |
| data | Object | - | - | 地区数据 |
| dict | Object | - | - | 自定义排序规则 |

- <a name="特性示例">新特性示例</a></br>
    排序规则：将传入的地区数据去匹配拼音字典首字母，默认规则按拼音的a-z排序，可以配置dict自定义传入会覆盖默认排序，dict结构如下
```
    <area-cascader :level="1" v-model="selected" :data="pcaa" :dict="setDict"></area-cascader>
    
    <script>
    export default {
        data(){
            return {
                setDict: {
                    "广东省": 'a', // 设置广东排第一 安徽排第二
                    "安徽省": 'b',
                }
            }
        }
    }
    </script>
```
## 事件

|  事件名  |  说明  |  参数 |
|  :--:  |  :--:  |  :--: |
| change | 选中值发生变化时触发 | 目前选择的值 |

> change 事件在 1.2.5 之后提供

## Related Project
* [react-area-linkage](https://github.com/dwqs/react-area-linkage)
## License
MIT.
