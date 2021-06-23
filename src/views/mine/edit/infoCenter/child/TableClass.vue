<template>
  <div id="TableClass">
    <div id="TableClass-table">
      <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;margin-left: 15%;margin-top: 5%; position: relative"
          @selection-change="handleSelectionChange"
          @select="check"
          @select-all="checkAll">
        <el-table-column
            type="selection"
            width="150">
        </el-table-column>
        <el-table-column
            prop="branch"
            label="院系"
            width="300">
        </el-table-column>
        <el-table-column
            prop="major"
            label="专业"
            width="350">
        </el-table-column>
        <el-table-column
            prop="className"
            label="班级"
            width="400">
        </el-table-column>
        <el-table-column
            prop="year"
            label="年级"
            show-overflow-tooltip>
        </el-table-column>
        <el-table-column width="200" label="操作">
          <template slot-scope="scope">
            <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          style="position: fixed; bottom:100px;margin-left: 40%;"
          background
          :page-size="10"
          :current-page.sync= "currentPage"
          layout="prev, pager, next"
          :total="totalDataNum">
      </el-pagination>
      <el-row style="position:relative; margin-top: 20px;margin-left: 90%">
        <el-button icon="el-icon-search" circle id="search"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle  @click="showAddOrEditBox" id="TableClass-add"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle id="delete"></el-button>
      </el-row>
    </div>
    <transition name="el-fade-in-linear">
      <div id="TableClass-addOrEditBox" v-show="addOrEdit">
        <div id="TableClass-addOrEditBox-box">
          <div id="TableClass-addOrEditBox-title">{{addOrEditBoxTitle}}</div>
          <div class="TableClass-addOrEditBox-box-InputBox">
            <input class="TableClass-addOrEditBox-box-input" placeholder="请输入新增院系" v-model="branch"/>
          </div>
          <div class="TableClass-addOrEditBox-box-InputBox">
            <input class="TableClass-addOrEditBox-box-input" placeholder="请输入新增专业" v-model="major"/>
          </div>
          <div class="TableClass-addOrEditBox-box-InputBox">
            <input class="TableClass-addOrEditBox-box-input" placeholder="请输入新增班级"v-model="className"/>
          </div>
          <div class="TableClass-addOrEditBox-box-InputBox">
            <input class="TableClass-addOrEditBox-box-input" placeholder="请输入新增年级" v-model="year"/>
          </div>
          <el-row style="margin-top: 70px;margin-left: 33%">
            <el-button round @click="showAddOrEditBox">取消</el-button>
            <el-button type="primary" round style="margin-left: 50px" @click="addOrEditData">保存</el-button>
          </el-row>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import {selectByPage} from "@/network/mine/edit/infoCenter/infoCenter";
import {addClass} from "@/network/mine/edit/infoCenter/infoCenter";
import {updateClass} from "@/network/mine/edit/infoCenter/infoCenter";
import {deleteClass} from "@/network/mine/edit/infoCenter/infoCenter";


export default {
  name: "TableClass",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      totalDataNum: 0,
      currentPage: 1,
      addOrEdit: false,
      branch: '',
      major: '',
      className: '',
      year: '',
      id: '',
      isAdd: true,
      addOrEditBoxTitle: ''
    }
  },
  watch: {
    currentPage(newV, oldV) {
      // console.log(newV,oldV)
      let page = newV-1
      this.changPage(page)
    },
  },
  methods: {
    check(selection,row) {
      console.log('单选');
      console.log(row)
      console.log(selection);

    },
    checkAll(selection) {
      console.log(selection);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
      this.id = row.id
      this.branch = row.branch
      this.major = row.major
      this.className = row.className
      this.year = row.year
      this.isAdd = false
      this.addOrEditBoxTitle = "修改"
      this.addOrEdit = ! this.addOrEdit
    },
    handleDelete(index, row) {
      // console.log(index, row);
      console.log(row.id)
      this.id = row.id
      if (confirm("您确定要删除此条数据吗")) {
        deleteClass(this.id).then(res => {
          if (res.message === "删除成功") {
            alert("删除成功")
            this.refreshPage()
          } else {
            alert("删除失败")
          }
        })
      }
    },
    changPage(page) {
      // console.log(page);
      selectByPage(page).then( res => {
        this.tableData = res.obj
      })
    },
    showAddOrEditBox() {
      this.branch = ''
      this.major = ''
      this.className = ''
      this.year = ''
      this.addOrEdit = ! this.addOrEdit
      this.addOrEditBoxTitle = "添加"
      this.isAdd = true
    },
    addOrEditData() {
      if (this.isAdd === true){
        if (confirm("您确定要添加此条数据吗")) {
          addClass(this.branch,this.major,this.className,this.year).then( res => {
            console.log(res);
            if (res.message === "新增成功") {
              alert("添加成功")
              this.refreshPage()
              this.showAddOrEditBox()
            }
          })
        }
      } else {
        if (confirm("您确定要修改此条数据吗")) {
          updateClass(this.id,this.branch,this.major,this.className,this.year).then( res => {
            console.log(res);
            if (res.message === "修改成功") {
              alert("修改成功")
              this.refreshPage()
              this.showAddOrEditBox()
            }
          })
        }
      }
    },
    refreshPage() {
      this.currentPage = 0
      selectByPage(0).then(res => {
        // console.log(res);
        this.tableData = res.obj
        this.totalDataNum = parseInt(res.code)
        // console.log(this.totalDataNum);
      })
    }
  },
  beforeCreate() {
    selectByPage(0).then(res => {
      // console.log(res);
      this.tableData = res.obj
      this.totalDataNum = parseInt(res.code)
      // console.log(this.totalDataNum);
    })
  }
}


</script>

<style scoped>
#TableClass {
  position: fixed;

}

#TableClass-table {
  position: relative;
}

#TableClass-addOrEditBox {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
  background: rgba(0,0,0,.3);
}

#TableClass-addOrEditBox-title {
  position: absolute;
  margin: 15px;
  font-size: 24px;
  font-weight: 700;
}

#TableClass-addOrEditBox-box {
  position: relative;
  height: 600px;
  width: 600px;
  background-image: linear-gradient( -135deg, #e0eafc, #cfdef3);
  margin: 6% auto;
  box-shadow: 0 0 10px 1px gray;
  border-radius: 5px;
  padding-top: 1px;
}

.TableClass-addOrEditBox-box-InputBox {
  margin-top: 60px;
}

.TableClass-addOrEditBox-box-input {
  height: 40px;
  width: 60%;
  margin-left: 20%;
  outline: none;
  border-radius: 5px;
  border: 1px darkgrey solid;
  -webkit-transition: .5s all;
  background: #DFE9F7;

}

.TableClass-addOrEditBox-box-input:focus {
  border: 1px #2E58FF solid;

}
</style>