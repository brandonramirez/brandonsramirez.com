module.exports = function (grunt) {

  var aws = grunt.file.readJSON(process.env.HOME + '/grunt-aws.json');

  var files = [
    { expand: true, cwd: 'css', src: '**', dest: 'css' },
    { expand: true, cwd: 'js', src: '**', dest: 'js' },
    { expand: true, cwd: 'img', src: '**', dest: 'img' },
    { expand: true, cwd: 'photos', src: '**', dest: 'photos' },
    { src: 'index.html', dest: 'index.html' }
  ];

  grunt.initConfig({

    aws_s3: {
      options: {
        accessKeyId: aws.key,
        secretAccessKey: aws.secret,
        differential: true,
        displayChangesOnly: true
      },

      prod: {
        options: {
          bucket: aws.prodBucket
        },

        files: files
      },

      staging: {
        options: {
          bucket: aws.stagingBucket
        },

        files: files
      }
    }

  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('deploy:prod', [ 'aws_s3:prod' ]);
  grunt.registerTask('deploy:staging', [ 'aws_s3:staging' ]);

};
